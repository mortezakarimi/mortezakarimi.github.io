import type { Locale } from "@/i18n/routing";
import {
  getCanonicalUrl,
  hreflangTags,
  type PageKey,
} from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";
import { profile, siteConfig } from "@/lib/site";
import { getTranslations } from "next-intl/server";
import type {
  BreadcrumbList,
  CollegeOrUniversity,
  ContactPage,
  DefinedTerm,
  EducationalOccupationalCredential,
  Graph,
  IdReference,
  ItemList,
  ListItem,
  Organization,
  Person,
  PostalAddress,
  ProfilePage,
  Thing,
  WebPage,
  WebSite,
} from "schema-dts";

type BuildSchemaOptions = {
  locale: Locale;
  page: PageKey;
};

const navKeys: Record<PageKey, "home" | "about" | "skills" | "contact"> = {
  home: "home",
  about: "about",
  skills: "skills",
  contact: "contact",
};

function schemaRef(id: string): IdReference {
  return { "@id": id };
}

export async function buildPageSchemaGraph({
  locale,
  page,
}: BuildSchemaOptions): Promise<Graph> {
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

  const website: WebSite = {
    "@type": "WebSite",
    "@id": websiteId,
    url: `${siteUrl}/`,
    name: siteConfig.name,
    description: tMeta("home.description"),
    inLanguage: [hreflangTags.en, hreflangTags.fa],
    publisher: schemaRef(personId),
    author: schemaRef(personId),
  };

  const person: Person = {
    "@type": "Person",
    "@id": personId,
    name: siteConfig.name,
    url: siteUrl,
    image: siteConfig.avatar,
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    jobTitle: siteConfig.headline,
    description: tMeta("home.description"),
    worksFor: {
      "@type": "Organization",
      name: siteConfig.company,
      url: siteUrl,
    } satisfies Organization,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tehran",
      addressCountry: "IR",
    } satisfies PostalAddress,
    sameAs: siteConfig.social.map((social) => social.href),
    knowsAbout: [
      ...profile.skills.frontend,
      ...profile.skills.backend,
      ...profile.skills.devops,
      ...profile.skills.database,
      ...profile.skills.leadership,
      "ERP Systems",
    ],
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
      }),
    ),
  };

  const breadcrumbs: BreadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
    itemListElement: buildBreadcrumbItems(locale, page, tNav),
  };

  const graph: Thing[] = [website, person, breadcrumbs];

  graph.push(buildWebPageNode(page, {
    webpageId,
    canonical,
    title,
    description,
    locale,
    websiteId,
    personId,
    breadcrumbId,
  }));

  if (page === "skills") {
    graph.push(buildSkillsList(canonical, title, description));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
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
};

function buildWebPageNode(
  page: PageKey,
  options: WebPageNodeOptions,
): WebPage | ProfilePage | ContactPage {
  const shared = {
    "@id": options.webpageId,
    url: options.canonical,
    name: options.title,
    description: options.description,
    inLanguage: hreflangTags[options.locale],
    isPartOf: schemaRef(options.websiteId),
    about: schemaRef(options.personId),
    breadcrumb: schemaRef(options.breadcrumbId),
  };

  if (page === "about") {
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

function buildSkillsList(
  canonical: string,
  title: string,
  description: string,
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
        } satisfies DefinedTerm,
      }),
    ),
  );

  return {
    "@type": "ItemList",
    "@id": `${canonical}#skills`,
    name: title,
    description,
    itemListElement,
  };
}
