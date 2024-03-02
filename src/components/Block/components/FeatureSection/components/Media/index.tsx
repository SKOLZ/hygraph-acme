import { EntityTypeName, Media as MediaType } from "@/generated/graphql";
import { StaticImage } from "./components/StaticImage";
import { YoutubeEmbed } from "./components/YoutubeEmbed";

interface Props {
  media: MediaType
}

export const Media: React.FC<Props> = ({media}) => {
  switch (media.__typename) {
    case EntityTypeName.StaticImage:
      return <StaticImage {...media} />
    case EntityTypeName.YoutubeEmbed:
      return <YoutubeEmbed {...media} />
    default:
      return null;
  }
} 
