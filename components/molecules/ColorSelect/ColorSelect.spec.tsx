import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ColorSelect } from "./ColorSelect";

test("should yellow color be checked by default", () => {
  render(<ColorSelect onChange={jest.fn()} />);
  expect(screen.getByLabelText(/brown/i)).toBeChecked();
});

test("should call onChange func when other color is selected", () => {
  const mockedChangeColorFunc = jest.fn();
  render(<ColorSelect onChange={mockedChangeColorFunc} />);
  userEvent.click(screen.getByLabelText(/gray/i));
  expect(mockedChangeColorFunc).toHaveBeenCalled();
});
