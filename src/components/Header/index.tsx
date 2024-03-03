import Link from "next/link";
import Image from "next/image";
import { Sizes } from "@/generated/graphql";
import Logo from "@/assets/acme_logo.svg";
import { ButtonLink } from "@/components/ButtonLink";

export const Header: React.FC = () => {
  return (
    <header className=" border-b border-b-gray-100 bg-white">
      <nav className="text-5 mx-auto flex max-w-screen-xl items-center gap-8 px-8 py-4.5 font-medium leading-6 text-secondary-600">
        <Link href="#">
          <Image src={Logo} width={97} height={22} alt="logo" />
        </Link>
        <Link href="#" className="hidden md:inline">
          Home
        </Link>
        <Link href="#" className="hidden md:inline">
          Features
        </Link>
        <Link href="#" className="hidden md:inline">
          Pricing
        </Link>
        <Link href="#" className="hidden md:mr-auto md:inline">
          About
        </Link>
        <Link href="#" className="hidden md:inline">
          Log in
        </Link>
        <ButtonLink href="#" size={Sizes.Sm} className="ml-auto w-auto md:ml-0">
          Sign up
        </ButtonLink>
      </nav>
    </header>
  );
};
