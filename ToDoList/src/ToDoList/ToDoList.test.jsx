import { render, screen } from "@testing-library/react";
import App from "../App";

test("It should render a list of ToDo items", () => {
  render(<App />);

  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();

  const items = screen.getAllByRole("listitem");

  expect(items).toHaveLength(2);

  //Test for the title of the task to do.
  expect(items[0]).toHaveTextContent("Aprender React Testing Library");
  expect(items[1]).toHaveTextContent("Hacer pruebas con Jest");

  //Test for the status of the taks.
  expect(items[0]).toHaveTextContent("[Pendiente]");
  expect(items[1]).toHaveTextContent("[Completado]");
});

test("It should display `No hay ninguna tarea por mostrar` message when there's not a single task to show", () => {
  render(<App initialTodos={[]} />);

  expect(screen.queryByRole("list")).not.toBeInTheDocument();

  expect(
    screen.getByText("No hay ninguna tarea por mostrar")
  ).toBeInTheDocument();
});
