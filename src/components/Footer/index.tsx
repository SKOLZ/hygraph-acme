import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="mx-auto w-full max-w-screen-xl px-8">
      <div className="text-5 flex flex-col items-center gap-12 border-t border-t-gray-200 py-8 text-center text-secondary-400 md:flex-row-reverse md:justify-between">
        <div className="flex gap-4">
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Cookies</Link>
        </div>
        <p>© 2023 Acme Co. All rights reserved.</p>
      </div>
    </footer>
  );
};
