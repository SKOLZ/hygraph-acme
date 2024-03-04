import { render } from "@testing-library/react"
import { Footer } from "."

describe("footer", () => {
  it("renders correctly", () => {
    const {container} = render(<Footer />);
    expect(container).toMatchSnapshot();
  })
})
