import { useTranslations } from "next-intl";
import { Card } from "@heroui/react";
import { NavButton } from "@/components/ui/NavButton";
import { projects } from "@/content/projects";

const proofKeys = ["lead", "senior", "impact"] as const;

export function HomeIntro() {
  const t = useTranslations("home");

  return (
    <section className="section-padding pt-0">
      <div className="container-narrow space-y-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl">
            <span className="text-gradient">{t("bioTitle")}</span>
          </h2>
          <p className="leading-relaxed text-[var(--color-muted)]">{t("bio")}</p>
        </div>

        <div>
          <h2 className="mb-6 text-center text-2xl font-semibold text-[var(--color-foreground)]">
            {t("pointsTitle")}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {proofKeys.map((key) => (
              <Card
                key={key}
                className="glass-card glow-hover rounded-2xl p-6"
                variant="secondary"
              >
                <Card.Content>
                  <p className="leading-relaxed text-[var(--color-muted)]">
                    {t(`points.${key}`)}
                  </p>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-center text-2xl font-semibold text-[var(--color-foreground)]">
            {t("workTitle")}
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-center text-[var(--color-muted)]">
            {t("workSubtitle")}
          </p>
          <ul className="mb-8 grid gap-4 md:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
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
                    <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                      {project.stack.join(" · ")}
                    </p>
                  </Card.Content>
                </Card>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <NavButton href="/projects" variant="primary">
              {t("workCta")}
            </NavButton>
          </div>
        </div>
      </div>
    </section>
  );
}
