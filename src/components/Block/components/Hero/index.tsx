import { BlockHero } from "@/generated/graphql";
import { getButtonSizeClassName } from "@/utils/getButtonSizeClassName";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Link from "next/link";

export const Hero: React.FC<BlockHero> = (hero) => {
  return (
    <div className="flex flex-col items-center text-center px-8 max-w-screen-xl mx-auto">
      <h1 className="title-1 text-secondary-900 mb-6">{hero.title}</h1>
      <RichText
        content={hero.description.raw}
        renderers={{
          p: ({ children }) => (
            <p className="text-1 text-secondary-400 mb-12 max-w-3xl">{children}</p>
          )
        }}
      />
      <div className="flex gap-3">
        {
          hero.buttonActions.map(button => (
            <Link href="#" key={button.buttonText} className={`button ${getButtonSizeClassName(button.size)}`}>{button.buttonText}</Link>
          ))
        }
      </div>
    </div>
  );
} 
