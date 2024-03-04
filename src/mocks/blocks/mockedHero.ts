import { BlockHero, Sizes } from "@/generated/graphql";

export const mockedHero = {
  __typename: "Hero" as const,
  id: "1",
  title: `Hero title`,
  description: {
    raw: {
      children: [
        {
          type: "paragraph",
          children: [
            {
              text: "Hero description",
            },
          ],
        },
      ],
    },
  },
  buttonActions: [
    {
      id: "clt7bqmoz9dkc07ujrs01ghn3",
      buttonText: "Get started",
      size: Sizes.Lg,
    },
  ],
};
