import { useRef, useState } from "react";
import AddListItem from "./ToDoItem/components/AddListItem";
import ToDoList from "./ToDoList";
import { mockTodos } from "./ToDoList/mocks/mockData";
import Modal from "./components/Modal";

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

  return (
    <main className="flex items-center justify-center flex-col gap-8">
      <header>
        <h1>Aplicación de tareas por hacer.</h1>
      </header>
      <section className="flex flex-col gap-4">
        <header className="self-end">
          <AddListItem handleClick={openModal} />
        </header>
        <ToDoList item={todos} />
      </section>
      <Modal dialogRef={dialog} onAddTask={handleTask} />
    </main>
  );
}

export default App;
