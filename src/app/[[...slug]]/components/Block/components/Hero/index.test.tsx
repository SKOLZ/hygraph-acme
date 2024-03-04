import { render } from "@testing-library/react"
import { Hero } from "."
import { mockedHero } from "@/mocks/blocks/mockedHero";

describe("Hero", () => {
  it("renders the component correctly", () => {
    const { container } = render(<Hero {...mockedHero} />);
    expect(container).toMatchSnapshot();
  })
})
