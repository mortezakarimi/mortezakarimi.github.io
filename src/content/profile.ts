/**
 * Locale-independent profile data sourced from Profile.pdf.
 * Presentation copy lives in i18n message files.
 */

export const profile = {
  person: {
    name: "Morteza Karimi",
    headline: "Team Lead & Senior Software Engineer",
    specialty: "Node.js · NestJS · Next.js",
    email: "me@morteza-karimi.com",
    phone: "+989216351266",
    personalWebsite: "https://morteza-karimi.com",
    aliasWebsite: "https://morteza-karimi.ir",
    yearsOfExperience: 13,
    location: {
      en: "Tehran, Iran",
      fa: "تهران، ایران",
    },
    languages: {
      en: ["English (Professional working)", "Persian (Native)"],
      fa: ["انگلیسی (حرفه‌ای)", "فارسی (زبان مادری)"],
    },
  },
  currentRole: {
    company: "ParsPack",
    title: "Back End Developer",
    period: { en: "Feb 2026 – Present", fa: "بهمن ۱۴۰۴ – اکنون" },
    location: { en: "Tehran, Iran", fa: "تهران، ایران" },
  },
  highlights: [
    {
      id: "erp-impact",
      metric: "90%",
      labelKey: "erpImpact",
    },
    {
      id: "efficiency",
      metric: "30%",
      labelKey: "efficiency",
    },
    {
      id: "time-tracking",
      metric: "95%",
      labelKey: "timeTracking",
    },
    {
      id: "api-performance",
      metric: "60%",
      labelKey: "apiPerformance",
    },
  ],
  experience: [
    {
      id: "parspack",
      company: "ParsPack",
      titleKey: "parspack.title",
      periodKey: "parspack.period",
      locationKey: "parspack.location",
      summaryKey: "parspack.summary",
    },
    {
      id: "trium",
      company: "Trium Novem GmbH",
      titleKey: "trium.title",
      periodKey: "trium.period",
      locationKey: "trium.location",
      summaryKey: "trium.summary",
    },
    {
      id: "bugloos",
      company: "BUGLOOS",
      titleKey: "bugloos.title",
      periodKey: "bugloos.period",
      locationKey: "bugloos.location",
      summaryKey: "bugloos.summary",
    },
  ],
  education: [
    {
      id: "masters",
      school: "Shahrood University of Technology",
      degreeKey: "masters.degree",
      periodKey: "masters.period",
    },
    {
      id: "bachelors",
      school: "Khayyam University",
      degreeKey: "bachelors.degree",
      periodKey: "bachelors.period",
    },
  ],
  certifications: [
    "Red Hat Certified Specialist in Ansible Automation",
    "MCITP",
    "Network+",
    "Go Tutorial",
    "JavaScript Tutorial",
  ],
  skills: {
    leadership: [
      "Team Leadership",
      "Development Coordination",
      "Technical Mentoring",
      "Jira",
    ],
    frontend: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
    ],
    backend: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Python",
      "Laravel",
      "Socket.io",
    ],
    database: ["PostgreSQL", "MySQL", "Query Optimization", "Caching"],
    devops: [
      "Docker",
      "Ansible",
      "GitLab CI/CD",
      "GitHub Actions",
      "Kubernetes",
    ],
  },
} as const;
