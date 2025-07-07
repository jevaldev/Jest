import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "../App";

beforeEach(() => {
  render(<App />);
  HTMLDialogElement.prototype.close = jest.fn();
  HTMLDialogElement.prototype.showModal = jest.fn();
});

describe("<ToDoItem /> functionalities", () => {
  test("Add a new element into the ToDo list", () => {
    const button = screen.getByText("Añadir nueva tarea");
    fireEvent.click(button);

    const modal = screen.getByText("Añadir nueva tarea");
    expect(modal).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Nueva tarea");
    fireEvent.change(input, { target: { value: "Aprender SQL" } });

    const addButton = screen.getByText("Crear nueva tarea");
    fireEvent.click(addButton);

    const newTask = screen.getByText("Aprender SQL");
    expect(newTask).toBeInTheDocument();
  });

  test("Add a new element with the `important tag`", () => {
    const button = screen.getByText("Añadir nueva tarea");
    fireEvent.click(button);

    const modal = screen.getByText("Añadir nueva tarea");
    expect(modal).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Nueva tarea");
    fireEvent.change(input, { target: { value: "Aprender SQL" } });

    const checkbox = screen.getByLabelText("Importante");
    fireEvent.click(checkbox);

    const addButton = screen.getByText("Crear nueva tarea");
    fireEvent.click(addButton);

    const listItem = screen.getByText("Aprender SQL").closest("li");
    expect(within(listItem).getByText("Importante")).toBeInTheDocument();
  });

  test("Delete a task", () => {
    const listItem = screen.getByText("Aprender React Testing Library");
    expect(listItem).toBeInTheDocument();

    const deleteButton = within(listItem.closest("li")).getByText("Eliminar");
    fireEvent.click(deleteButton);

    expect(
      screen.queryByText("Aprender React Testing Library")
    ).not.toBeInTheDocument();
  });
});

describe("Display message errors when submitting a new entry", () => {
  test("Display `El nombre de la tarea no puede estar vacío.` when submitting an empty form", () => {
    const buttonModal = screen.getByText("Añadir nueva tarea");
    fireEvent.click(buttonModal);

    const modal = screen.getByText("Añadir nueva tarea");
    expect(modal).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Nueva tarea");
    fireEvent.change(input, { target: { value: "" } });

    const addButton = screen.getByText("Crear nueva tarea");
    fireEvent.click(addButton);

    expect(
      screen.getByText(`El nombre de la tarea no puede estar vacío.`)
    ).toBeInTheDocument();
  });

  test("Display `Ya existe una tarea con ese nombre.` when submitting a duplicated task name", () => {
    const buttonModal = screen.getByText("Añadir nueva tarea");
    fireEvent.click(buttonModal);

    const modal = screen.getByText("Añadir nueva tarea");
    expect(modal).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Nueva tarea");
    fireEvent.change(input, {
      target: { value: "Hacer pruebas con Jest" },
    });

    const addButton = screen.getByText("Crear nueva tarea");
    fireEvent.click(addButton);

    expect(
      screen.getByText("Ya existe una tarea con ese nombre.")
    ).toBeInTheDocument();
  });
});
