import { render, screen } from "@testing-library/react";
import { CartList } from "./CartList";

test("when cartItems is empty properly message should be displayed", () => {
  render(<CartList cartItems={[]} />);
  expect(screen.getByText(/Cart is empty/i)).toBeInTheDocument();
});

test("when cartItems is not empty list of items should be displayer", () => {
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
  ];
  render(<CartList cartItems={fakeCartItems} />);
  expect(screen.queryByText(/cart is empty/i)).not.toBeInTheDocument();
  expect(screen.getAllByTestId("cart-product")).toHaveLength(2);
});
