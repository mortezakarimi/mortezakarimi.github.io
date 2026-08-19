import { profile } from "@/content/profile";
import { getSiteUrl } from "@/lib/site-url";

export const siteConfig = {
  name: profile.person.name,
  get url() {
    return getSiteUrl();
  },
  logo: "/icon-512x512.svg",
  avatar:
    "https://www.gravatar.com/avatar/8b061f35749ca97107a1233505ef3cf6?s=480&d=mp",
  email: profile.person.email,
  phone: profile.person.phone,
  personalWebsite: profile.person.personalWebsite,
  aliasWebsite: profile.person.aliasWebsite,
  location: profile.person.location,
  company: profile.currentRole.company,
  headline: profile.person.headline,
  specialty: profile.person.specialty,
  yearsOfExperience: profile.person.yearsOfExperience,
  resumeUrl: "https://cv.morteza-karimi.com/english/morteza-karimi-resume-en.pdf",
  social: [
    {
      name: "GitHub",
      href: "https://github.com/mortezakarimi/",
      icon: "github" as const,
    },
    {
      name: "GitLab",
      href: "https://gitlab.com/mortezakarimi",
      icon: "gitlab" as const,
    },
    {
      name: "X",
      href: "https://x.com/mortie_WO_rick",
      icon: "x" as const,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mortezakarimi/",
      icon: "linkedin" as const,
    },
    {
      name: "Medium",
      href: "https://medium.com/@mortezak1373",
      icon: "medium" as const,
    },
    {
      name: "Telegram",
      href: "https://t.me/mortie_without_rick",
      icon: "telegram" as const,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@mortie-verse",
      icon: "youtube" as const,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/mortie_without_rick",
      icon: "instagram" as const,
    },
  ],
  skills: profile.skills,
} as const;

export const contentUpdatedAt = "2026-08-19";

export const routes = ["", "about", "projects", "skills", "contact"] as const;

export type RouteKey = (typeof routes)[number];

export { profile };
