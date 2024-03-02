import { RichText } from "@graphcms/rich-text-react-renderer";
import { BlockHero } from "@/generated/graphql";
import { ButtonLink } from "@/components/ButtonLink";

export const Hero: React.FC<BlockHero> = (hero) => {
  return (
    <div className="flex flex-col items-center text-center px-8 max-w-screen-xl mx-auto">
      <h1 className="title-1 text-secondary-900 mb-4 xl:mb-6">{hero.title}</h1>
      <RichText
        content={hero.description.raw}
        renderers={{
          p: ({ children }) => (
            <p className="text-2 text-secondary-400 mb-8 max-w-3xl xl:mb-12">{children}</p>
          )
        }}
      />
      <div className="flex gap-3 flex-col justify-center self-stretch xl:flex-row">
        {
          hero.buttonActions.map(button => (
            <ButtonLink href="#" key={button.buttonText} size={button.size}>
              {button.buttonText}
            </ButtonLink>
          ))
        }
      </div>
    </div>
  );
} 
