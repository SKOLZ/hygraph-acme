import { BlockFeatureSection } from "@/generated/graphql";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { getDirectionClassName } from "./utils/getDirectionClassName";
import { Media } from "./components/Media";
import { getButtonSizeClassName } from "@/utils/getButtonSizeClassName";
import Link from "next/link";

export const FeatureSection: React.FC<BlockFeatureSection> = (featureSection) => {
  return (
    <div className={`flex items-center max-w-screen-xl mx-auto px-8 gap-24 ${getDirectionClassName(featureSection.direction)}`}>
      <div className="w-1/2 flex flex-col items-start">
        {featureSection.label && (
          <p className="text-3">{featureSection.label}</p>
        )}
        <h2 className="title-2 mb-4">{featureSection.title}</h2>
        <RichText
          content={featureSection.description.raw}
          renderers={{
            p: ({ children }) => (
              <p className="text-2 text-secondary-600">{children}</p>
            )
          }}
        />
        {featureSection.featureSectionButton && (
          <Link href="#" className={`button ${getButtonSizeClassName(featureSection.featureSectionButton.size)} mt-8`}>
            {featureSection.featureSectionButton.buttonText}
          </Link>
        )}
      </div>
      <div className="w-1/2 bg-secondary-100 p-10 rounded-3xl">
        {
          featureSection.media && (
            <Media media={featureSection.media} />
          )
        }
      </div>
    </div>
  );
} 
