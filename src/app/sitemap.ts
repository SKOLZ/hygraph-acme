import { getPagesUpdateDate } from "@/services/pages";

export default async function sitemap() {
  const pages = await getPagesUpdateDate();

  return pages.map((page) => ({
    url: page.url,
    lastModified: page.updatedAt,
  }));
}
