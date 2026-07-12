import { useTranslations } from "next-intl";
import { Card, Chip } from "@heroui/react";
import { siteConfig } from "@/lib/site";

const categories = [
  "leadership",
  "frontend",
  "backend",
  "database",
  "devops",
] as const;

export function SkillsGrid() {
  const t = useTranslations("skills");

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

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <Card
              key={category}
              className="glass-card glow-hover rounded-2xl p-6"
              variant="secondary"
            >
              <Card.Header>
                <Card.Title className="text-lg font-semibold text-[var(--color-foreground)]">
                  {t(`categories.${category}.title`)}
                </Card.Title>
                <Card.Description className="text-[var(--color-muted)]">
                  {t(`categories.${category}.description`)}
                </Card.Description>
              </Card.Header>
              <Card.Content>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.skills[category].map((skill) => (
                    <Chip key={skill} color="accent" variant="soft" size="sm">
                      {skill}
                    </Chip>
                  ))}
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
