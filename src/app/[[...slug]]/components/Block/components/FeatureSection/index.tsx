import { RichText } from "@graphcms/rich-text-react-renderer";
import { BlockFeatureSection } from "@/generated/graphql";
import { ButtonLink } from "@/components/ButtonLink";
import { getDirectionClassName } from "./utils/getDirectionClassName";
import { Media } from "./components/Media";

export const FeatureSection: React.FC<BlockFeatureSection> = (
  featureSection,
) => {
  return (
    <div
      className={`mx-auto flex max-w-screen-xl flex-col gap-12 px-8 ${getDirectionClassName(featureSection.direction)} lg:flex-row lg:items-center lg:gap-24`}
    >
      <div className="flex flex-col items-start lg:flex-1">
        {featureSection.label && (
          <p className="text-4">{featureSection.label}</p>
        )}
        <h2 className="title-2 mb-4">{featureSection.title}</h2>
        <RichText
          content={featureSection.description.raw}
          renderers={{
            p: ({ children }) => (
              <p className="text-3 text-secondary-600">{children}</p>
            ),
          }}
        />
        {featureSection.featureSectionButton && (
          <ButtonLink
            href="#"
            size={featureSection.featureSectionButton.size}
            className="mt-8"
          >
            {featureSection.featureSectionButton.buttonText}
          </ButtonLink>
        )}
      </div>
      {featureSection.media && (
        <div className="flex justify-center lg:flex-1 lg:rounded-3xl lg:bg-secondary-100">
          <Media media={featureSection.media} />
        </div>
      )}
    </div>
  );
};
