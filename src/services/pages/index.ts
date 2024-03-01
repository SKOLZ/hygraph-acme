import { getSdk } from "@/generated/graphql";
import { client } from "../client";

export const getPageContent = async (url: string) => {
  const response = await getSdk(client).pageContent({ url });
  return response.page;
};
