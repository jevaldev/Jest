import { useRef, useState } from "react";
import ToDoList from "./ToDoList/ToDoList";
import { mockTodos } from "./ToDoList/mockData";
import Modal from "./components/Modal";
import Button from "./components/Button";

function App({ initialTodos = mockTodos }) {
  const [todos, setTodos] = useState(initialTodos);
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
      <header className="flex-1 self-stretch">
        <h1 className="text-center">Aplicación de tareas por hacer.</h1>
      </header>
      <section className="flex flex-col gap-8 w-full">
        <header className="self-end">
          <Button text="Añadir nueva tarea" handleClick={openModal} />
        </header>
        {todos.length > 0 ? (
          <ToDoList handleDelete={handleDelete} item={todos} />
        ) : (
          <div className="h-[50svh] flex flex-col items-center justify-center text-cyan-200 text-xl font-bold gap-2">
            <p>No hay ninguna tarea por mostrar</p>
            <p>Prueba a agregar una nueva con el botón "Añadir nueva tarea"</p>
          </div>
        )}
      </section>
      <Modal todos={todos} dialogRef={dialog} onAddTask={handleTask} />
    </main>
  );
}

export default App;
