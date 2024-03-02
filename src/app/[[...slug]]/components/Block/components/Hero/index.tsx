import { RichText } from "@graphcms/rich-text-react-renderer";
import { BlockHero } from "@/generated/graphql";
import { ButtonLink } from "@/components/ButtonLink";

export const Hero: React.FC<BlockHero> = (hero) => {
  return (
    <div className="flex flex-col items-center text-center px-8 max-w-screen-xl mx-auto">
      <h1 className="title-1 text-secondary-900 mb-6 xl:mb-4">{hero.title}</h1>
      <RichText
        content={hero.description.raw}
        renderers={{
          p: ({ children }) => (
            <p className="text-1 text-secondary-400 mb-12 max-w-3xl xl:mb-8">{children}</p>
          )
        }}
      />
      <div className="flex gap-3 xl:self-stretch xl:flex-col">
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
