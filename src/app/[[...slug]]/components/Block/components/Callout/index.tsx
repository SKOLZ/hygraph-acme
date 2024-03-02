import { RichText } from "@graphcms/rich-text-react-renderer";
import { BlockCallout } from "@/generated/graphql";
import { ButtonLink } from "@/components/ButtonLink";

export const Callout: React.FC<BlockCallout> = (callout) => {
  return (
    <div className="px-8 w-full max-w-screen-xl mx-auto">
      <div className="p-8 rounded-2xl flex flex-col justify-between items-start bg-secondary-800 gap-8 xl:flex-row xl:p-16">
        <div className="flex flex-col items-start gap-4">
          <h2 className="title-2 text-white">{callout.title}</h2>
          <RichText
            content={callout.description.raw}
            renderers={{
              p: ({ children }) => (
                <p className="text-1 text-white">{children}</p>
              )
            }}
          />
        </div>
        <ButtonLink href="#" size={callout.actionButton.size}>
          {callout.actionButton.buttonText}
        </ButtonLink>
      </div>
    </div>
  );
} 
