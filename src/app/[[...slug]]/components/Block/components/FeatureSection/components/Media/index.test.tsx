import { render } from "@testing-library/react"
import { Media } from ".";
import { mockedStaticImage } from "@/mocks/media/mockedStaticImage";
import { mockedYoutubeEmbed } from "@/mocks/media/mockedYoutubeEmbed";

describe("Media", () => {
  it("renders the StaticImage based on the provided type", () => {
    const { container } = render(<Media media={mockedStaticImage} />);
    expect(container).toMatchSnapshot();
  })

  it("renders the YoutubeEmbed based on the provided type", () => {
    const { container } = render(<Media media={mockedYoutubeEmbed} />);
    expect(container).toMatchSnapshot();
  })
})
