import { FeatureSectionStaticImage } from "@/generated/graphql";
import Image from "next/image";

export const StaticImage: React.FC<FeatureSectionStaticImage> = (staticImage) => {
  return (
    <div className="relative h-45 lg:h-80 lg:m-10 rounded border border-gray-50">
      <Image src={staticImage.image.url} alt={staticImage.altText || ''} fill className="object-cover" sizes="100%" />
    </div>
  );
}
