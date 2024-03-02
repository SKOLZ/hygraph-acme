import { Sizes } from "@/generated/graphql";
import { ButtonSizes } from "../types";

const buttonClassNameMap: Record<Sizes, string> = {
  sm: "button-sm",
  md: "button-md",
  lg: "button-lg",
} as const;

export const getButtonSizeClassName = (size?: ButtonSizes) =>
  size ? buttonClassNameMap[size] : buttonClassNameMap.md;
