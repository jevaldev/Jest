import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "../../App/App";

describe("<ToDoItem /> functionalities", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Add a new element into the ToDo list", () => {
    const button = screen.getByText("Crear nueva tarea");
    fireEvent.click(button);

    const modal = screen.getByText("Agregar nueva tarea");
    expect(modal).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Nueva tarea");
    fireEvent.change(input, { target: { value: "Aprender SQL" } });

    const addButton = screen.getByText("Crear nueva tarea");
    fireEvent.click(addButton);

    const newTask = screen.getByText("Aprender SQL");
    expect(newTask).toBeInTheDocument();
  });

  test("Delete a task", () => {
    const listItem = screen.getByText("Aprender React Testing Library");
    expect(listItem).toBeInTheDocument();

    const deleteButton = within(listItem.closest("li")).getByText("Eliminar");
    fireEvent(deleteButton);

    expect(
      screen.queryByText("Aprender React Testing Library")
    ).not.toBeInTheDocument();
  });
});
