import { RichText } from "@graphcms/rich-text-react-renderer";
import { BlockFeatureSection } from "@/generated/graphql";
import { ButtonLink } from "@/components/ButtonLink";
import { getDirectionClassName } from "./utils/getDirectionClassName";
import { Media } from "./components/Media";

export const FeatureSection: React.FC<BlockFeatureSection> = (featureSection) => {
  return (
    <div className={`flex items-center max-w-screen-xl mx-auto px-8 gap-24 ${getDirectionClassName(featureSection.direction)} xl:flex-col xl:gap-12`}>
      <div className="w-1/2 flex flex-col items-start xl:w-full">
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
          <ButtonLink href="#" size={featureSection.featureSectionButton.size} className="mt-8">
            {featureSection.featureSectionButton.buttonText}
          </ButtonLink>
        )}
      </div>
      <div className="w-1/2 bg-secondary-100 p-10 rounded-3xl xl:w-full xl:p-0 xl:rounded-none">
        {
          featureSection.media && (
            <Media media={featureSection.media} />
          )
        }
      </div>
    </div>
  );
} 
