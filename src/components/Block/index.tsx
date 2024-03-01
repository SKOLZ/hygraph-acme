import { Callout } from "./components/Callout"
import { FeatureSection } from "./components/FeatureSection"
import { Hero } from "./components/Hero"
import { Block as BlockType } from "@/generated/graphql";

interface Props {
  block: BlockType;
}

export const Block: React.FC<Props> = ({ block }) => {
  switch (block.__typename) {
    case "Hero":
      return <Hero {...block} />
    case "FeatureSection":
      return <FeatureSection {...block} />
    case "Callout":
      return <Callout {...block} />
    default:
      return null;
  }
}
