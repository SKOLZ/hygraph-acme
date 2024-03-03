import Link from "next/link";

interface Props {
}

export const Footer: React.FC<Props> = () => {
  return (
    <footer className="w-full max-w-screen-xl px-8 mx-auto">
      <div className="flex flex-col items-center gap-12 py-8 text-5 text-secondary-400 text-center border-t border-t-gray-200 md:justify-between md:flex-row-reverse">
        <div className="flex gap-4">
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Cookies</Link>
        </div>
        <p>
          © 2023 Acme Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 
