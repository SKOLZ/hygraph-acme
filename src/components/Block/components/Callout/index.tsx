import { BlockCallout } from "@/generated/graphql";
import { getButtonSizeClassName } from "@/utils/getButtonSizeClassName";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Link from "next/link";

export const Callout: React.FC<BlockCallout> = (callout) => {
  return (
    <div className="px-8 w-full max-w-screen-xl mx-auto">
      <div className="p-16 rounded-2xl flex justify-between items-start bg-secondary-800">
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
        <Link href="#" className={`button ${getButtonSizeClassName(callout.actionButton.size)}`}>
          {callout.actionButton.buttonText}
        </Link>
      </div>
    </div>
  );
} 
