import { client } from "../client";
import { pageContentQuery } from "./queries/pageContentQuery";

export const getPageContent = () => client.request(pageContentQuery);
