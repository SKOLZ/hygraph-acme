import { render } from "@testing-library/react"
import { Callout } from ".";
import { mockedCallout } from "@/mocks/blocks/mockedCallout";

describe("Callout", () => {
  it("renders the component correctly", () => {
    const { container } = render(<Callout {...mockedCallout} />);
    expect(container).toMatchSnapshot();
  })
})
