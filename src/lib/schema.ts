import type { Locale } from "@/i18n/routing";
import { getCanonicalUrl, hreflangTags, type PageKey } from "@/lib/seo";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";
import { profile, siteConfig } from "@/lib/site";
import { projects } from "@/content/projects";
import { getTranslations } from "next-intl/server";
import type {
  BreadcrumbList,
  CollegeOrUniversity,
  CollectionPage,
  ContactPage,
  ContactPoint,
  CreativeWork,
  DefinedTerm,
  EducationalOccupationalCredential,
  IdReference,
  ImageObject,
  ItemList,
  ListItem,
  Occupation,
  Organization,
  OrganizationRole,
  Person,
  PostalAddress,
  ProfilePage,
  Thing,
  WebPage,
  WebSite,
  WithContext,
} from "schema-dts";

type BuildSchemaOptions = {
  locale: Locale;
  page: PageKey;
};

type JsonLdDocument = WithContext<Thing>;

const navKeys: Record<PageKey, "home" | "about" | "projects" | "skills" | "contact"> =
  {
    home: "home",
    about: "about",
    projects: "projects",
    skills: "skills",
    contact: "contact",
  };

const experienceDates: Record<
  (typeof profile.experience)[number]["id"],
  { startDate: string; endDate?: string }
> = {
  parspack: { startDate: "2026-02" },
  trium: { startDate: "2023-08", endDate: "2025-09" },
  bugloos: { startDate: "2019-08", endDate: "2023-09" },
};

function schemaRef(id: string): IdReference {
  return { "@id": id };
}

function withContext<T extends Thing>(data: T): WithContext<T> {
  return {
    "@context": "https://schema.org",
    ...(data as object),
  } as WithContext<T>;
}

export async function buildPageSchemas({
  locale,
  page,
}: BuildSchemaOptions): Promise<JsonLdDocument[]> {
  const siteUrl = getSiteUrl();
  const canonical = getCanonicalUrl(locale, page);
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const title = tMeta(`${page}.title`);
  const description = tMeta(`${page}.description`);

  const websiteId = `${siteUrl}/#website`;
  const personId = `${siteUrl}/#person`;
  const webpageId = `${canonical}#webpage`;
  const breadcrumbId = `${canonical}#breadcrumb`;
  const skillsListId = `${canonical}#skills`;
  const projectsListId = `${canonical}#projects`;
  const avatarId = `${personId}/image`;

  const avatarImage: ImageObject = {
    "@type": "ImageObject",
    "@id": avatarId,
    url: siteConfig.avatar,
    contentUrl: siteConfig.avatar,
    width: "480",
    height: "480",
    caption: siteConfig.name,
  };

  const website: WebSite = {
    "@type": "WebSite",
    "@id": websiteId,
    url: absoluteUrl("/"),
    name: siteConfig.name,
    alternateName: ["مرتضی کریمی", siteConfig.headline],
    description: tMeta("home.description"),
    inLanguage: [hreflangTags.en, hreflangTags.fa],
    publisher: schemaRef(personId),
    author: schemaRef(personId),
    copyrightHolder: schemaRef(personId),
    about: schemaRef(personId),
  };

  const person = {
    "@type": "Person",
    "@id": personId,
    name: siteConfig.name,
    givenName: "Morteza",
    familyName: "Karimi",
    alternateName: ["مرتضی کریمی", "Mortie"],
    url: absoluteUrl("/"),
    image: schemaRef(avatarId),
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    jobTitle: siteConfig.headline,
    description: tMeta("home.description"),
    worksFor: {
      "@type": "Organization",
      name: siteConfig.company,
    } satisfies Organization,
    homeLocation: {
      "@type": "Place",
      name: profile.person.location[locale],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tehran",
        addressCountry: "IR",
      } satisfies PostalAddress,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tehran",
      addressCountry: "IR",
    } satisfies PostalAddress,
    sameAs: [
      siteConfig.aliasWebsite,
      siteConfig.resumeUrl,
      ...siteConfig.social.map((social) => social.href),
    ],
    knowsAbout: [
      "Team Leadership",
      "Software Development",
      "Senior Software Engineering",
      ...profile.skills.frontend,
      ...profile.skills.backend,
      ...profile.skills.devops,
      ...profile.skills.database,
      ...profile.skills.leadership,
      "ERP Systems",
    ],
    knowsLanguage: profile.person.languages[locale],
    alumniOf: profile.education.map(
      (education): CollegeOrUniversity => ({
        "@type": "CollegeOrUniversity",
        name: education.school,
      }),
    ),
    hasCredential: profile.certifications.map(
      (name): EducationalOccupationalCredential => ({
        "@type": "EducationalOccupationalCredential",
        name,
        credentialCategory: "certification",
      }),
    ),
    hasOccupation: buildOccupation(locale),
    workExperience: await buildWorkExperience(locale),
    contactPoint: buildContactPoints(locale),
    mainEntityOfPage:
      page === "home" || page === "about" || page === "contact"
        ? schemaRef(webpageId)
        : undefined,
  } as Person;

  const schemas: JsonLdDocument[] = [
    withContext(avatarImage),
    withContext(website),
    withContext(person),
  ];

  if (page !== "home") {
    schemas.push(
      withContext({
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: buildBreadcrumbItems(locale, page, tNav),
      } satisfies BreadcrumbList),
    );
  }

  const pageNode = buildWebPageNode(page, {
    webpageId,
    canonical,
    title,
    description,
    locale,
    websiteId,
    personId,
    breadcrumbId,
    skillsListId,
    projectsListId,
  });
  schemas.push(withContext(pageNode));

  if (page === "skills") {
    schemas.push(
      withContext(buildSkillsList(canonical, title, description, skillsListId)),
    );
  }

  if (page === "projects") {
    const tProjects = await getTranslations({ locale, namespace: "projects" });
    schemas.push(
      withContext(
        buildProjectsList(canonical, title, description, projectsListId, tProjects),
      ),
    );
  }

  return schemas;
}

type WebPageNodeOptions = {
  webpageId: string;
  canonical: string;
  title: string;
  description: string;
  locale: Locale;
  websiteId: string;
  personId: string;
  breadcrumbId: string;
  skillsListId: string;
  projectsListId: string;
};

function buildWebPageNode(
  page: PageKey,
  options: WebPageNodeOptions,
): WebPage | ProfilePage | ContactPage | CollectionPage {
  const shared = {
    "@id": options.webpageId,
    url: options.canonical,
    name: options.title,
    description: options.description,
    inLanguage: hreflangTags[options.locale],
    isPartOf: schemaRef(options.websiteId),
    about: schemaRef(options.personId),
    ...(page !== "home"
      ? { breadcrumb: schemaRef(options.breadcrumbId) }
      : {}),
    primaryImageOfPage: schemaRef(`${options.personId}/image`),
    author: schemaRef(options.personId),
  };

  if (page === "home" || page === "about") {
    return {
      "@type": "ProfilePage",
      ...shared,
      mainEntity: schemaRef(options.personId),
    } satisfies ProfilePage;
  }

  if (page === "contact") {
    return {
      "@type": "ContactPage",
      ...shared,
      mainEntity: schemaRef(options.personId),
    } satisfies ContactPage;
  }

  if (page === "skills") {
    return {
      "@type": "CollectionPage",
      ...shared,
      mainEntity: schemaRef(options.skillsListId),
    } satisfies CollectionPage;
  }

  if (page === "projects") {
    return {
      "@type": "CollectionPage",
      ...shared,
      mainEntity: schemaRef(options.projectsListId),
    } satisfies CollectionPage;
  }

  return {
    "@type": "WebPage",
    ...shared,
  } satisfies WebPage;
}

function buildBreadcrumbItems(
  locale: Locale,
  page: PageKey,
  tNav: (key: string) => string,
): ListItem[] {
  const items: Array<{ name: string; page: PageKey }> = [
    { name: tNav("home"), page: "home" },
  ];

  if (page !== "home") {
    items.push({ name: tNav(navKeys[page]), page });
  }

  return items.map(
    (item, index): ListItem => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(locale, item.page),
    }),
  );
}

function buildOccupation(locale: Locale): Occupation {
  return {
    "@type": "Occupation",
    name: siteConfig.headline,
    description: siteConfig.specialty,
    occupationalCategory: "Software Developer",
    skills: [
      "Team Leadership",
      "Software Development",
      ...profile.skills.frontend,
      ...profile.skills.backend,
      ...profile.skills.devops,
    ].join(", "),
    experienceRequirements: `${profile.person.yearsOfExperience}+ years`,
    occupationLocation: {
      "@type": "City",
      name: profile.person.location[locale],
    },
  };
}

async function buildWorkExperience(locale: Locale): Promise<OrganizationRole[]> {
  const tExperience = await getTranslations({
    locale,
    namespace: "experience",
  });

  return profile.experience.map((role): OrganizationRole => {
    const dates = experienceDates[role.id];

    return {
      "@type": "OrganizationRole",
      roleName: tExperience(`${role.id}.title`),
      description: tExperience(`${role.id}.summary`),
      startDate: dates.startDate,
      endDate: dates.endDate,
      memberOf: {
        "@type": "Organization",
        name: role.company,
      } satisfies Organization,
    } as OrganizationRole;
  });
}

function buildContactPoints(locale: Locale): ContactPoint[] {
  return [
    {
      "@type": "ContactPoint",
      contactType: "professional inquiries",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      availableLanguage: profile.person.languages[locale],
      areaServed: "Worldwide",
    },
  ];
}

function buildSkillsList(
  canonical: string,
  title: string,
  description: string,
  skillsListId: string,
): ItemList {
  const categories = Object.entries(profile.skills) as Array<
    [keyof typeof profile.skills, readonly string[]]
  >;

  const itemListElement = categories.flatMap(([category, skills], categoryIndex) =>
    skills.map(
      (skill, skillIndex): ListItem => ({
        "@type": "ListItem",
        position: categoryIndex * 20 + skillIndex + 1,
        name: skill,
        item: {
          "@type": "DefinedTerm",
          name: skill,
          description: category,
          inDefinedTermSet: {
            "@type": "DefinedTermSet",
            name: title,
            url: canonical,
          },
        } satisfies DefinedTerm,
      }),
    ),
  );

  return {
    "@type": "ItemList",
    "@id": skillsListId,
    name: title,
    description,
    numberOfItems: itemListElement.length,
    itemListElement,
  };
}

function buildProjectsList(
  canonical: string,
  title: string,
  description: string,
  projectsListId: string,
  tProjects: (key: string) => string,
): ItemList {
  const itemListElement = projects.map(
    (project, index): ListItem => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      url: project.repoUrl,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        description: tProjects(`items.${project.id}.summary`),
        url: project.repoUrl,
        creator: {
          "@type": "Person",
          name: siteConfig.name,
        },
      } satisfies CreativeWork,
    }),
  );

  return {
    "@type": "ItemList",
    "@id": projectsListId,
    name: title,
    description,
    numberOfItems: itemListElement.length,
    itemListElement,
  };
}
