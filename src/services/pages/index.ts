import { getSdk } from "@/generated/graphql";
import { client } from "../client";

const generateSubPath = (slug?: Array<string>) =>
  slug ? `/${slug.join("/")}` : "/";

export const getPageContent = async (slug?: Array<string>) => {
  const subpath = generateSubPath(slug);
  const response = await getSdk(client).pageContent({ url: subpath });
  return response.page;
};

export const getPageSeo = async (slug?: Array<string>) => {
  const subpath = generateSubPath(slug);
  const response = await getSdk(client).pageSeo({ url: subpath });
  return response.page;
};

export const getPagesUpdateDate = async () => {
  const response = await getSdk(client).pagesUpdateDate();
  return response.pages;
};

export const getPagesUrls = async () => {
  const response = await getSdk(client).pagesUrls();
  return response.pages;
};
