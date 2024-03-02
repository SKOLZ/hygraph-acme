import Link from "next/link";
import Logo from "@/assets/acme_logo.svg";
import Image from "next/image";
import { Sizes } from "@/generated/graphql";
import { ButtonLink } from "../ButtonLink";

export const Header: React.FC = () => {
  return (
    <header className=" bg-white border-b-gray-100 border-b">
      <nav className="flex items-center gap-8 px-8 py-4.5 text-secondary-600 text-5 font-medium leading-6 max-w-screen-xl mx-auto">
        <Link href="#"><Image src={Logo} width={100} height={22} alt="logo" /></Link>
        <Link href="#" className="hidden xl:inline">Home</Link>
        <Link href="#" className="hidden xl:inline">Features</Link>
        <Link href="#" className="hidden xl:inline">Pricing</Link>
        <Link href="#" className="hidden xl:inline xl:mr-auto">About</Link>
        <Link href="#" className="hidden xl:inline">Log in</Link>
        <ButtonLink href="#" size={Sizes.Sm} className="ml-auto w-auto xl:ml-0">Sign up</ButtonLink>
      </nav>
    </header>
  );
} 
