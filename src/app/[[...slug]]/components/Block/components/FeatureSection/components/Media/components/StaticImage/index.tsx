import { FeatureSectionStaticImage } from "@/generated/graphql";
import Image from "next/image";

export const StaticImage: React.FC<FeatureSectionStaticImage> = (
  staticImage,
) => {
  return (
    <Image
      src={staticImage.image.url}
      alt={staticImage.altText || ""}
      width={staticImage.image.width!}
      height={staticImage.image.height!}
      className="rounded border border-gray-50 min-w-0 lg:m-10"
    />
  );
};
