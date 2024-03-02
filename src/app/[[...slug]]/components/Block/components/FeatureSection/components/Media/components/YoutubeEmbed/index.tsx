import { FeatureSectionYoutubeEmbed } from "@/generated/graphql";

export const YoutubeEmbed: React.FC<FeatureSectionYoutubeEmbed> = (youtubeEmbed) => {
  return (
    <iframe
      title={youtubeEmbed.title}
      src={youtubeEmbed.youtubeUrl}
      allowFullScreen
      className="h-80 xl:h-45"
      width="100%"
      loading="lazy"
    />
  );
} 
