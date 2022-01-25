import { render, screen } from "@testing-library/react";
import React from "react";
import { CheckoutList } from "./CheckoutList";

test("when cartItems is empty properly message should be displayer", () => {
  render(<CheckoutList cartItems={[]} />);
  expect(screen.getByText(/cart is empty/i)).toBeInTheDocument();
});

test("when cartItems is not empty list of items should be displayed", () => {
  const fakeCartItems = [
    {
      id: "1",
      name: "wardrobe",
      description: "wardrobe",
      cost: 300,
      wardrobetype: "freestanding",
      imgurl: "/wardrobe.jpg",
      quantity: 1,
    },
    {
      id: "2",
      name: "wardrobe",
      description: "wardrobe",
      cost: 300,
      wardrobetype: "freestanding",
      imgurl: "/wardrobe.jpg",
      quantity: 2,
    },
    {
      id: "3",
      name: "wardrobe",
      description: "wardrobe",
      cost: 300,
      wardrobetype: "freestanding",
      imgurl: "/wardrobe.jpg",
      quantity: 2,
    },
  ];

  render(<CheckoutList cartItems={fakeCartItems} />);
  expect(screen.queryByText(/cart is empty/i)).not.toBeInTheDocument();
  expect(screen.getAllByTestId("checkout-product")).toHaveLength(3);
});
