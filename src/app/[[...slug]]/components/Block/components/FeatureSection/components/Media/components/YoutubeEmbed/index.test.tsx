import { render } from "@testing-library/react"
import { mockedYoutubeEmbed } from "@/mocks/media/mockedYoutubeEmbed"
import { YoutubeEmbed } from "."

describe("YoutubeEmbed", () => {
  it("renders the element correctly", () => {
    const {container} = render(<YoutubeEmbed {...mockedYoutubeEmbed} />);
    expect(container).toMatchSnapshot();
  })
})
