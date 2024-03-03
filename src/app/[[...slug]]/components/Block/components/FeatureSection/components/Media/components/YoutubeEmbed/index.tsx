import { FeatureSectionYoutubeEmbed } from "@/generated/graphql";

export const YoutubeEmbed: React.FC<FeatureSectionYoutubeEmbed> = (youtubeEmbed) => {
  return (
    <div className="lg:p-10">
      <iframe
        title={youtubeEmbed.title}
        src={youtubeEmbed.youtubeUrl}
        allowFullScreen
        className="aspect-video"
        width="100%"
        loading="lazy"
      />
    </div>
  );
} 
