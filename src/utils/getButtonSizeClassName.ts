import { Sizes } from "@/generated/graphql";

const buttonClassNameMap: Record<Sizes, string> = {
  sm: "button-sm",
  md: "button-md",
  lg: "button-lg",
} as const;

type ButtonSizes = Sizes | null | undefined;

export const getButtonSizeClassName = (size?: ButtonSizes) =>
  size ? buttonClassNameMap[size] : buttonClassNameMap.md;
