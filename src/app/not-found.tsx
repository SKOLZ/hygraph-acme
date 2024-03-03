import { getPagesUrls } from "@/services/pages";
import Link from "next/link";

export default async function NotFound() {
  const existingPages = await getPagesUrls();

  return (
    <div className="mx-auto flex max-w-screen-lg flex-1 flex-col items-center justify-center gap-4 text-center">
      <h1 className="title-1 text-secondary-900">
        The page you were looking for doesn&apos;t exist
      </h1>
      <p className="text-2 text-secondary-400">
        Maybe you were looking for one of these:
      </p>
      <ul className="flex gap-1">
        {existingPages.map((page) => (
          <li key={page.url}>
            <Link
              className="text-2 rounded-sm bg-secondary-100 px-2 py-1 text-secondary-600"
              href={page.url}
            >
              {page.url}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
