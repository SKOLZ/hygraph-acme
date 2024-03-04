import { getPageContent } from "@/services/pages";
import { render, screen } from "@testing-library/react";
import Home from "./page";
import { mockedPageContent } from "@/mocks/pages/mockedPageContent";
import { notFound } from "next/navigation";

jest.mock("../../services/pages/", () => ({
  getPageContent: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

describe("[[...slug]]", () => {
  describe("when there's pageContent", () => {
    it("renders the right amount of sections", async () => {
      (getPageContent as jest.Mock).mockImplementationOnce(
        () => Promise.resolve(mockedPageContent({sectionAmount: 3, blockAmount: 2}))
      );
      render(await Home({params:{slug: ['/']}}));
      const sections = screen.getAllByText('Block 1', { exact: false });
      expect(sections).toHaveLength(3);
    });
  
    it("renders the right amount of blocks", async () => {
      (getPageContent as jest.Mock).mockImplementationOnce(
        () => Promise.resolve(mockedPageContent({sectionAmount: 1, blockAmount: 4}))
      );
      render(await Home({params:{slug: ['/']}}));
      const blocks = screen.getAllByText('Block', { exact: false });
      expect(blocks).toHaveLength(4);
    });
  });

  describe("when there's no page", () => {
    it("renders the not found page", async () => {
      (getPageContent as jest.Mock).mockImplementationOnce(
        () => Promise.resolve(null)
      );
      const notFoundMock = jest.fn();
      (notFound as unknown as jest.Mock).mockImplementationOnce(notFoundMock);
      render(await Home({params:{slug: ['/']}}));
      expect(notFoundMock).toHaveBeenCalledTimes(1);
    });
  });
});
