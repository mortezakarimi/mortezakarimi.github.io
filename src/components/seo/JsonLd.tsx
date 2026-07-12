import { profile, siteConfig } from "@/lib/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: siteConfig.avatar,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    jobTitle: siteConfig.headline,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.company,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tehran",
      addressCountry: "IR",
    },
    sameAs: siteConfig.social.map((s) => s.href),
    knowsAbout: [
      ...profile.skills.frontend,
      ...profile.skills.backend,
      ...profile.skills.devops,
      "ERP Systems",
      "Team Leadership",
    ],
    alumniOf: profile.education.map((edu) => ({
      "@type": "CollegeOrUniversity",
      name: edu.school,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
