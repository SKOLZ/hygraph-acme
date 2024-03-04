import { BlockFeatureSection, Direction, Sizes } from "@/generated/graphql";

export const mockedFeatureSection = {
  __typename: "FeatureSection" as const,
  id: "clt7bqmp09dkf07uj2k6in82a",
  label: "feature section label",
  title: "feature section title",
  description: {
    raw: {
      children: [
        {
          type: "paragraph",
          children: [
            {
              text: "As a composable and headless platform, Acme works with all your preferred frontend frameworks, existing systems, GraphQL and REST APIs.",
            },
          ],
        },
      ],
    },
  },
  media: {
    __typename: "StaticImage" as const,
    image: {
      url: "https://media.graphassets.com/bbd3PKNcTBGVkNbcois7",
      width: 480,
      height: 320,
    },
    altText: "Stats page showing a profile views chart and a chat window",
  },
  direction: Direction.LeftToRight,
  featureSectionButton: {
    buttonText: "Get started",
    size: Sizes.Lg,
  },
};
