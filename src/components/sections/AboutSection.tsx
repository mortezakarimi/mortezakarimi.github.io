import { useTranslations } from "next-intl";
import { Card } from "@heroui/react";
import { profile } from "@/content/profile";
import { NavButton } from "@/components/ui/NavButton";
import { siteConfig } from "@/lib/site";

const narrativeSections = [
  "intro",
  "experience",
  "opensource",
  "interests",
  "connect",
] as const;

export function AboutSection() {
  const t = useTranslations("about");
  const tHighlights = useTranslations("highlights");
  const tExperience = useTranslations("experience");
  const tEducation = useTranslations("education");

  return (
    <section className="section-padding">
      <div className="container-narrow space-y-12">
        <h1 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          <span className="text-gradient">{t("title")}</span>
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {narrativeSections.map((section) => (
            <Card
              key={section}
              className="glass-card glow-hover rounded-2xl p-6"
              variant="secondary"
            >
              <Card.Header>
                <Card.Title className="text-lg font-semibold text-[var(--color-accent)]">
                  {t(`${section}.title`)}
                </Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="leading-relaxed text-[var(--color-muted)]">
                  {t(`${section}.content`)}
                </p>
              </Card.Content>
            </Card>
          ))}
        </div>

        <div>
          <h2 className="mb-6 text-center text-2xl font-semibold text-[var(--color-foreground)]">
            {t("highlightsTitle")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {profile.highlights.map((item) => (
              <Card
                key={item.id}
                className="glass-card glow-hover rounded-2xl p-5 text-center"
                variant="secondary"
              >
                <Card.Content>
                  <p className="mb-2 text-3xl font-bold text-[var(--color-accent)]">
                    {item.metric}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {tHighlights(item.labelKey)}
                  </p>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-center text-2xl font-semibold text-[var(--color-foreground)]">
            {t("experienceTitle")}
          </h2>
          <div className="grid gap-4">
            {profile.experience.map((job) => (
              <Card
                key={job.id}
                className="glass-card glow-hover rounded-2xl p-6"
                variant="secondary"
              >
                <Card.Header>
                  <Card.Title className="text-lg font-semibold text-[var(--color-foreground)]">
                    {job.company}
                  </Card.Title>
                  <Card.Description className="text-[var(--color-accent)]">
                    {tExperience(job.titleKey)}
                  </Card.Description>
                </Card.Header>
                <Card.Content>
                  <p className="mb-2 text-sm text-[var(--color-muted)]">
                    {tExperience(job.periodKey)} · {tExperience(job.locationKey)}
                  </p>
                  <p className="leading-relaxed text-[var(--color-muted)]">
                    {tExperience(job.summaryKey)}
                  </p>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-center text-2xl font-semibold text-[var(--color-foreground)]">
            {t("educationTitle")}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {profile.education.map((item) => (
              <Card
                key={item.id}
                className="glass-card glow-hover rounded-2xl p-6"
                variant="secondary"
              >
                <Card.Header>
                  <Card.Title className="text-base font-semibold text-[var(--color-foreground)]">
                    {item.school}
                  </Card.Title>
                  <Card.Description className="text-[var(--color-muted)]">
                    {tEducation(item.degreeKey)}
                  </Card.Description>
                </Card.Header>
                <Card.Content>
                  <p className="text-sm text-[var(--color-muted)]">
                    {tEducation(item.periodKey)}
                  </p>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <NavButton href={siteConfig.resumeUrl} variant="primary" external>
            {t("resume")}
          </NavButton>
        </div>
      </div>
    </section>
  );
}
