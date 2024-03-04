import { render } from "@testing-library/react"
import { mockedHero } from "@/mocks/blocks/mockedHero";
import { mockedFeatureSection } from "@/mocks/blocks/mockedFeatureSection";
import { mockedCallout } from "@/mocks/blocks/mockedCallout";
import { Block } from ".";

describe("Block", () => {
  it("renders the Hero based on the provided type", () => {
    const { container } = render(<Block block={mockedHero} />);
    expect(container).toMatchSnapshot();
  })

  it("renders the FeatureSection based on the provided type", () => {
    const { container } = render(<Block block={mockedFeatureSection} />);
    expect(container).toMatchSnapshot();
  })

  it("renders the Callout based on the provided type", () => {
    const { container } = render(<Block block={mockedCallout} />);
    expect(container).toMatchSnapshot();
  })
})
