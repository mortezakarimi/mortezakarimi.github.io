export const projects = [
  {
    id: "gentelella-rtl",
    name: "Gentelella RTL",
    repoUrl: "https://github.com/mortezakarimi/gentelella-rtl",
    stack: ["HTML", "Bootstrap", "RTL"],
  },
  {
    id: "adminator-rtl",
    name: "Adminator RTL",
    repoUrl: "https://github.com/mortezakarimi/Adminator-admin-dashboard-rtl",
    stack: ["Bootstrap", "Admin dashboard", "RTL"],
  },
  {
    id: "resume",
    name: "Morteza Karimi Resume",
    repoUrl: "https://github.com/mortezakarimi/morteza-karimi-resume",
    liveUrl: "https://cv.morteza-karimi.com/english/morteza-karimi-resume-en.pdf",
    stack: ["LaTeX"],
  },
  {
    id: "awx-installer",
    name: "AWX Installer",
    repoUrl: "https://github.com/mortezakarimi/awx-installer",
    stack: ["Ansible", "Debian"],
  },
] as const;

export type Project = (typeof projects)[number];
