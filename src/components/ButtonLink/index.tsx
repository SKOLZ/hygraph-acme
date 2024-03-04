import { PropsWithChildren } from "react";
import Link from "next/link";
import { getButtonSizeClassName } from "./utils/getButtonSizeClassName";
import { ButtonSizes } from "./types";

interface Props extends PropsWithChildren {
  size?: ButtonSizes;
  href: string;
  className?: string;
}

export const ButtonLink: React.FC<Props> = ({
  size,
  href,
  className = "",
  children,
}) => {
  return (
    <Link
      href={href}
      className={`button ${getButtonSizeClassName(size)} ${className}`}
    >
      {children}
    </Link>
  );
};
