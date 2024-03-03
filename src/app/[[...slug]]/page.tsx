import { getPageContent, getPageSeo } from "@/services/pages";
import { Block } from "./components/Block";
import Head from "next/head";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug?: Array<string>;
  };
}

export async function generateMetadata({ params }: Props) {
  const page = await getPageSeo(params.slug);
  if (!page) {
    return {};
  }
  const url = params.slug
    ? `${process.env.SITE_URL}/${params.slug.join("/")}`
    : process.env.SITE_URL;
  return {
    metadataBase: new URL(process.env.SITE_URL!),
    title: page.seo.title,
    description: page.seo.description,
    images: [page.seo.seoImage?.url],
    url,
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      images: [page.seo.seoImage?.url],
      url,
    },
    alternates: {
      canonical:
        page.seo.canonicalUrl &&
        `${process.env.SITE_URL}/${page.seo.canonicalUrl}`,
    },
  };
}

export default async function Home({ params }: Props) {
  const pageContent = await getPageContent(params.slug);

  if (!pageContent) {
    console.log("no page content");
    return notFound();
  }

  return (
    <>
      {pageContent.sections.map((section) => (
        <section
          key={section.id}
          className="flex flex-col gap-16 py-12 xl:gap-20 xl:py-24"
        >
          {section.block.map((block) => (
            <Block key={block.id} block={block} />
          ))}
        </section>
      ))}
    </>
  );
}
