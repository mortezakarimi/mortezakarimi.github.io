import { buildPageSchemaGraph } from "@/lib/schema";
import type { PageKey } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

type Props = {
  locale: Locale;
  page: PageKey;
};

export async function JsonLd({ locale, page }: Props) {
  const schema = await buildPageSchemaGraph({ locale, page });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
