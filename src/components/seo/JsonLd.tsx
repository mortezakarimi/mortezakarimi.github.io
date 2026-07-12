import { buildPageSchemas } from "@/lib/schema";
import type { PageKey } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

type Props = {
  locale: Locale;
  page: PageKey;
};

export async function JsonLd({ locale, page }: Props) {
  const schemas = await buildPageSchemas({ locale, page });

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`${page}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
