import Button from "../components/Button";

export default function ToDoItem({ title, status }) {
  return (
    <>
      <strong className="block font-bold text-xl text-cyan-950 text-center">
        {title}
      </strong>
      <span className="block text-sm text-cyan-700">
        {status ? "[Completado]" : "[Pendiente]"}
      </span>
      <Button
        text={"Eliminar"}
        handleClick={() => {}}
        aria-label={`Eliminar tarea ${title}`}
      />
    </>
  );
}
