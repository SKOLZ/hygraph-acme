import { render } from "@testing-library/react"
import { Header } from ".";

describe("footer", () => {
  it("renders correctly", () => {
    const {container} = render(<Header />);
    expect(container).toMatchSnapshot();
  })
})
