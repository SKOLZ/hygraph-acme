import { FeatureSectionStaticImage } from "@/generated/graphql";
import Image from "next/image";

export const StaticImage: React.FC<FeatureSectionStaticImage> = (staticImage) => {
  return (
    <div className="relative h-80">
      <Image src={staticImage.image.url} alt={staticImage.altText || ''} fill />
    </div>
  );
} 
