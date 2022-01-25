import { render, screen } from "@testing-library/react";
import { ProductsList } from "./ProductsList";

test("when products is empty properly message should be displayer", () => {
  render(<ProductsList products={[]} />);
  expect(
    screen.getByText(/Sorry, we can't load products/i),
  ).toBeInTheDocument();
});

test("when products is not empty list of items should be displayer", () => {
  const fakeCartItems = [
    {
      id: "1",
      name: "wardrobe",
      description: "wardrobe",
      cost: 300,
      wardrobetype: "freestanding",
      imgurl: "/wardrobe.jpg",
    },
    {
      id: "2",
      name: "wardrobe",
      description: "wardrobe",
      cost: 300,
      wardrobetype: "freestanding",
      imgurl: "/wardrobe.jpg",
    },
  ];
  render(<ProductsList products={fakeCartItems} />);
  expect(screen.queryByText(/cart is empty/i)).not.toBeInTheDocument();
  expect(screen.getAllByTestId("product-title")).toHaveLength(2);
});
