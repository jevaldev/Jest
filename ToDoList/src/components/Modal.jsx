import { useState } from "react";
import Button from "./Button";

export default function Modal({ dialogRef, onAddTask, todos }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [important, setImportant] = useState(false);

  const validateTask = (text, todos) => {
    if (!text.trim()) return "El nombre de la tarea no puede estar vacío.";
    if (todos.some((todo) => todo.text === text))
      return "Ya existe una tarea con ese nombre.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateTask(text, todos);
    if (validationError) {
      setError(validationError);
      return;
    }

    onAddTask(text, important);
    setText("");
    setImportant(false);
  };

  return (
    <dialog
      className="w-[90vw] max-w-[500px] p-12 rounded-xl shadow text-center relative
             backdrop:bg-black/30 backdrop:backdrop-blur-sm 
             open:fixed open:top-1/2 open:left-1/2 open:-translate-x-1/2 open:-translate-y-1/2"
      ref={dialogRef}
      aria-label="Agregar nueva tarea"
    >
      <h2 className="text-2xl font-bold ">Agregar nueva tarea</h2>
      <p>Este es un text de ejemplo que da igual</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 my-12 relative"
      >
        <input
          className="border-2  border-gray-500 p-2 w-full"
          type="text"
          placeholder="Nueva tarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label className=" self-start" htmlFor="importantCheck">
          <input
            id="importantCheck"
            type="checkbox"
            checked={important}
            onChange={(e) => setImportant(e.target.checked)}
          />{" "}
          Importante
        </label>
        {error && (
          <p className="absolute top-full text-red-400 text-sm mt-2 font-bold text-center w-full">
            {error}
          </p>
        )}
        <Button text={"Crear nueva tarea"} />
      </form>
      <Button handleClick={() => dialogRef.current.close()} text={"Cerrar"} />
    </dialog>
  );
}
