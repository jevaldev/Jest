import { useRef, useState } from "react";
import ToDoList from "./ToDoList/ToDoList";
import { mockTodos } from "./ToDoList/mockData";
import Modal from "./components/Modal";
import Button from "./components/Button";

function App() {
  const [todos, setTodos] = useState(mockTodos);
  const dialog = useRef(null);

  const openModal = () => {
    dialog.current?.showModal();
  };

  const handleTask = (text, important) => {
    const newTask = {
      id: crypto.randomUUID,
      text,
      important,
    };
    setTodos((prev) => [...prev, newTask]);
    dialog.current.close();
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <main className="flex items-center justify-center flex-col gap-8 py-8">
      <header>
        <h1>Aplicación de tareas por hacer.</h1>
      </header>
      <section className="flex flex-col gap-8">
        <header className="self-end">
          <Button text="Añadir nueva tarea" handleClick={openModal} />
        </header>
        <ToDoList handleDelete={handleDelete} item={todos} />
      </section>
      <Modal todos={todos} dialogRef={dialog} onAddTask={handleTask} />
    </main>
  );
}

export default App;
