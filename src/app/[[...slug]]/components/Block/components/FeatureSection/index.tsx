import { RichText } from "@graphcms/rich-text-react-renderer";
import { BlockFeatureSection } from "@/generated/graphql";
import { ButtonLink } from "@/components/ButtonLink";
import { getDirectionClassName } from "./utils/getDirectionClassName";
import { Media } from "./components/Media";

export const FeatureSection: React.FC<BlockFeatureSection> = (featureSection) => {
  return (
    <div className={`flex flex-col max-w-screen-xl mx-auto px-8 gap-12 ${getDirectionClassName(featureSection.direction)} xl:items-center xl:flex-row xl:gap-24`}>
      <div className="flex flex-col items-start xl:flex-1">
        {featureSection.label && (
          <p className="text-4">{featureSection.label}</p>
        )}
        <h2 className="title-2 mb-4">{featureSection.title}</h2>
        <RichText
          content={featureSection.description.raw}
          renderers={{
            p: ({ children }) => (
              <p className="text-3 text-secondary-600">{children}</p>
            )
          }}
        />
        {featureSection.featureSectionButton && (
          <ButtonLink href="#" size={featureSection.featureSectionButton.size} className="mt-8">
            {featureSection.featureSectionButton.buttonText}
          </ButtonLink>
        )}
      </div>
      <div className="xl:flex-1 xl:bg-secondary-100 xl:rounded-3xl">
        {
          featureSection.media && (
            <Media media={featureSection.media} />
          )
        }
      </div>
    </div>
  );
} 
