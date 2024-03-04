import { mockedStaticImage } from "@/mocks/media/mockedStaticImage";
import { StaticImage } from ".";
import { render } from "@testing-library/react";

describe("StaticImage", () => {
  it("renders the element correctly", () => {
    const {container} = render(<StaticImage {...mockedStaticImage} />);
    expect(container).toMatchSnapshot();
  })
})
