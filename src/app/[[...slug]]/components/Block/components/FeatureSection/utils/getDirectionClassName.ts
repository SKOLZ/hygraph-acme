import { Direction } from "@/generated/graphql";

export const getDirectionClassName = (direction: Direction) =>
  direction === Direction.RightToLeft ? "xl:flex-row-reverse" : "";
