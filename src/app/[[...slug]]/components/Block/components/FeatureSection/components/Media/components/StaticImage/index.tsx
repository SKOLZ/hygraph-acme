import { FeatureSectionStaticImage } from "@/generated/graphql";
import Image from "next/image";

export const StaticImage: React.FC<FeatureSectionStaticImage> = (staticImage) => {
  return (
    <div className="relative h-45 xl:h-80 xl:m-10 rounded border border-gray-50">
      <Image src={staticImage.image.url} alt={staticImage.altText || ''} fill objectFit="cover" />
    </div>
  );
} 
