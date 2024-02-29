import Link from "next/link";
import Logo from "@/assets/acme_logo.svg";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <header className=" bg-white border-b-gray-100 border-b">
      <nav className="flex gap-8 items-center py-4.5 px-8 text-secondary-600 font-medium leading-6 max-w-screen-xl mx-auto">
        <Link href="#"><Image src={Logo} width={100} height={22} alt="logo" /></Link>
        <Link href="#">Home</Link>
        <Link href="#">Features</Link>
        <Link href="#">Pricing</Link>
        <Link href="#" className="mr-auto">About</Link>
        <Link href="#">Log in</Link>
        <Link href="#" className="button button-sm">Sign up</Link>
      </nav>
    </header>
  );
} 
