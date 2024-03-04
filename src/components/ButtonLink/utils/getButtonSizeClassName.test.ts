import { Sizes } from "@/generated/graphql";
import { getButtonSizeClassName } from "./getButtonSizeClassName";

describe("getButtonSizeClassName", () => {
  it("sets the button-sm classname", () => {
    const className = getButtonSizeClassName(Sizes.Sm);
    expect(className).toBe("button-sm");
  });

  it("sets the button-md classname", () => {
    const className = getButtonSizeClassName(Sizes.Md);
    expect(className).toBe("button-md");
  });

  it("sets the button-lg classname", () => {
    const className = getButtonSizeClassName(Sizes.Lg);
    expect(className).toBe("button-lg");
  });

  it("sets a default classname", () => {
    const className = getButtonSizeClassName();
    expect(className).toBe("button-md");
  });
});
