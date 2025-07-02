import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./counter";

test("Deberia incrementar al hacer clic en el boton", () => {
  render(<Counter />);
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Clicks: 0");
  fireEvent.click(button);
  expect(button).toHaveTextContent("Clicks: 1");
});
