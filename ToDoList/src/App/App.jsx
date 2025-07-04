import { useRef } from "react";
import AddListItem from "../ToDoItem/components/AddListItem";
import ToDoList from "../ToDoList";
import { mockTodos } from "../ToDoList/mocks/mockData";
import Modal from "../components/Modal";

function App() {
  const dialog = useRef(null);

  const openModal = () => {
    dialog.current?.showModal();
  };

  return (
    <main>
      <header>
        <h1>Aplicación de tareas por hacer.</h1>
      </header>
      <section>
        <header>
          <AddListItem handleClick={openModal} />
        </header>
        <ToDoList item={mockTodos} />
        <Modal />
      </section>
    </main>
  );
}

export default App;
