import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";

test("debería mostrar un saludo con el nombre", () => {
  render(<Greeting name="Jesus" />);
  expect(screen.getByText("Hola, Jesus")).toBeInTheDocument();
});
