interface Props {
  sectionAmount: number;
  blockAmount: number;
}

export const mockedPageContent = ({ sectionAmount, blockAmount }: Props) => ({
  sections: new Array(sectionAmount).fill("").map((_, sectionIndex) => ({
    id: sectionIndex,
    blocks: new Array(blockAmount).fill("").map((_, blockIndex) => ({
      __typename: "Hero",
      id: blockIndex,
      title: `Section ${sectionIndex} - Block ${blockIndex}`,
      description: {
        raw: {
          children: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Equip your team with the industry’s leading native GraphQL Content APIs, Content Federation capabilities and rich set of developer tools, to build truly composable applications.",
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
          size: "lg",
        },
      ],
    })),
  })),
});
