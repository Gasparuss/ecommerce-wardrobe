import { render, screen } from "@testing-library/react";
import { StripeButton } from "./StripeButton";

test("button should be disabled when basket is emplty (price = 0)", () => {
  render(<StripeButton price={0} />);
  expect(screen.getByRole("button", { name: /pay now/i })).toBeDisabled();
});

test("button should be enabled when basket is not emplty (price > 0)", () => {
  render(<StripeButton price={100} />);
  expect(screen.getByRole("button", { name: /pay now/i })).toBeEnabled();
});
