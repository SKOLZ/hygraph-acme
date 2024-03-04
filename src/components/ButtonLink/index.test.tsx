import { Sizes } from "@/generated/graphql";
import { ButtonLink } from ".";
import { render, screen } from '@testing-library/react';

describe("ButtonLink", () => {
  it ("renders the button in the small size", () => {
    const { container } = render(<ButtonLink href="#" size={Sizes.Sm}>button</ButtonLink>);
    expect(container).toMatchSnapshot();
  })

  it ("renders the button in the medium size", () => {
    const { container } = render(<ButtonLink href="#" size={Sizes.Md}>button</ButtonLink>);
    expect(container).toMatchSnapshot();
  })

  it ("renders the button in the large size", () => {
    const { container } = render(<ButtonLink href="#" size={Sizes.Lg}>button</ButtonLink>);
    expect(container).toMatchSnapshot();
  })

  it ("shows the specified children", () => {
    const BUTTON_CONTENT = "content";
    render(<ButtonLink href="#">{BUTTON_CONTENT}</ButtonLink>);
    expect(screen.getByRole('link', { name: BUTTON_CONTENT })).toBeVisible();
  })

  it ("adds the specified classnames", () => {
    const TEST_CLASSNAME = "test-classname";
    render(<ButtonLink href="#" className={TEST_CLASSNAME}>button</ButtonLink>);
    expect(screen.getByRole('link', { name: 'button' })).toHaveClass(TEST_CLASSNAME);
  })

  it ("assigns to the correct url", () => {
    const REDIRECT_URL = "redirect/url";
    render(<ButtonLink href={REDIRECT_URL}>button</ButtonLink>);
    expect(screen.getByRole('link', { name: 'button' })).toHaveAttribute('href', REDIRECT_URL);
  })
})
