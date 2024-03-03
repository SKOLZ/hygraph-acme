import { RichText } from "@graphcms/rich-text-react-renderer";
import { BlockCallout } from "@/generated/graphql";
import { ButtonLink } from "@/components/ButtonLink";

export const Callout: React.FC<BlockCallout> = (callout) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-8">
      <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-secondary-800 p-8 xl:flex-row xl:p-16">
        <div className="flex flex-col items-start gap-4">
          <h2 className="title-2 text-white">{callout.title}</h2>
          <RichText
            content={callout.description.raw}
            renderers={{
              p: ({ children }) => (
                <p className="text-1 text-white">{children}</p>
              ),
            }}
          />
        </div>
        <ButtonLink href="#" size={callout.actionButton.size}>
          {callout.actionButton.buttonText}
        </ButtonLink>
      </div>
    </div>
  );
};
