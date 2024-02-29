import Link from "next/link";

interface Props {
}

export const Footer: React.FC<Props> = () => {
  return (
    <footer className="w-full max-w-screen-xl px-8 mx-auto">
      <div className="flex justify-between text-secondary-400 leading-6 py-8 border-t border-t-gray-200">
        <p>
          © 2023 Acme Co. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Cookies</Link>
        </div>
      </div>
    </footer>
  );
} 
