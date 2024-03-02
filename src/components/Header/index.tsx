import Link from "next/link";
import Logo from "@/assets/acme_logo.svg";
import Image from "next/image";
import { Sizes } from "@/generated/graphql";
import { ButtonLink } from "../ButtonLink";

export const Header: React.FC = () => {
  return (
    <header className=" bg-white border-b-gray-100 border-b">
      <nav className="flex gap-8 items-center py-4.5 px-8 text-secondary-600 font-medium leading-6 max-w-screen-xl mx-auto">
        <Link href="#"><Image src={Logo} width={100} height={22} alt="logo" /></Link>
        <Link href="#" className="xl:hidden">Home</Link>
        <Link href="#" className="xl:hidden">Features</Link>
        <Link href="#" className="xl:hidden">Pricing</Link>
        <Link href="#" className="mr-auto xl:hidden">About</Link>
        <Link href="#" className="xl:hidden">Log in</Link>
        <ButtonLink href="#" size={Sizes.Sm} className="xl:ml-auto xl:w-auto">Sign up</ButtonLink>
      </nav>
    </header>
  );
} 
