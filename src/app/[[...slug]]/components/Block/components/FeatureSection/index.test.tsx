import { render } from "@testing-library/react"
import { FeatureSection } from ".";
import { mockedFeatureSection } from "@/mocks/blocks/mockedFeatureSection";

describe("FeatureSection", () => {
  it("renders the component correctly", () => {
    const { container } = render(<FeatureSection {...mockedFeatureSection} />);
    expect(container).toMatchSnapshot();
  })
})
