import { render } from "@testing-library/react";
import NotFound from "./not-found";
import { mockedPagesUrls } from "@/mocks/pages/mockedPagesUrls";

jest.mock("../services/pages/", () => ({
  getPagesUrls: () => Promise.resolve(mockedPagesUrls),
}));

describe("not-found", () => {
  it("renders the not found page correctly", async () => {
    const jsx = await NotFound();
    const {container} = render(jsx);
    expect(container).toMatchSnapshot();
  })
});
