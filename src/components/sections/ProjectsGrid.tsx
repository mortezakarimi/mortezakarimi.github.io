import { useTranslations } from "next-intl";
import { Card, Chip } from "@heroui/react";
import { projects } from "@/content/projects";

export function ProjectsGrid() {
  const t = useTranslations("projects");

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            <span className="text-gradient">{t("title")}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--color-muted)]">
            {t("subtitle")}
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.id}>
              <Card
                className="glass-card glow-hover h-full rounded-2xl p-6"
                variant="secondary"
              >
                <Card.Header>
                  <Card.Title className="text-lg font-semibold text-[var(--color-foreground)]">
                    {project.name}
                  </Card.Title>
                </Card.Header>
                <Card.Content>
                  <p className="mb-4 leading-relaxed text-[var(--color-muted)]">
                    {t(`items.${project.id}.summary`)}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Chip key={item} color="accent" variant="soft" size="sm">
                        {item}
                      </Chip>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-accent)] hover:underline"
                    >
                      {t("repo")}
                    </a>
                    {"liveUrl" in project && project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-accent)] hover:underline"
                      >
                        {t("live")}
                      </a>
                    ) : null}
                  </div>
                </Card.Content>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
