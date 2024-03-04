import { RichText } from "@graphcms/rich-text-react-renderer";
import { BlockHero } from "@/generated/graphql";
import { ButtonLink } from "@/components/ButtonLink";

export const Hero: React.FC<BlockHero> = (hero) => {
  return (
    <div className="mx-auto w-full flex max-w-screen-xl flex-col items-center px-8 text-center">
      <h1 className="title-1 mb-4 text-secondary-900 sm:mb-6">{hero.title}</h1>
      <RichText
        content={hero.description.raw}
        renderers={{
          p: ({ children }) => (
            <p className="text-2 mb-8 max-w-3xl text-secondary-400 sm:mb-12">
              {children}
            </p>
          ),
        }}
      />
      <div className="flex flex-col items-center justify-center gap-3 self-stretch sm:flex-row">
        {hero.buttonActions.map((button) => (
          <ButtonLink href="#" key={button.buttonText} size={button.size}>
            {button.buttonText}
          </ButtonLink>
        ))}
      </div>
    </div>
  );
};
