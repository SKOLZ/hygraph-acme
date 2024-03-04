import { FeatureSectionYoutubeEmbed } from "@/generated/graphql";

export const YoutubeEmbed: React.FC<FeatureSectionYoutubeEmbed> = (
  youtubeEmbed,
) => {
  return (
    <iframe
      title={youtubeEmbed.title}
      src={youtubeEmbed.youtubeUrl}
      allowFullScreen
      className="aspect-video lg:m-10"
      width="100%"
      loading="lazy"
    />
  );
};
