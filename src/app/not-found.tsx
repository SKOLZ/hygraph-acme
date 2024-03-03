import { getPagesUrls } from "@/services/pages";
import Link from "next/link";

export default async function NotFound() {
  const existingPages = await getPagesUrls();

  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-screen-lg mx-auto text-center gap-4">
      <h1 className="title-1 text-secondary-900">The page you were looking for doesn&apos;t exist</h1>
      <p className="text-2 text-secondary-400">Maybe you were looking for one of these:</p>
      <ul className="flex gap-1">
        {
          existingPages.map(page => (
            <li key={page.url}>
              <Link className="bg-secondary-100 text-2 text-secondary-600 px-2 py-1 rounded-sm" href={page.url}>{page.url}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
} 
