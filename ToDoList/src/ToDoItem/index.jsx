import Button from "../components/Button";

export default function ToDoItem({
  id,
  title,
  status,
  important,
  handleDelete,
}) {
  return (
    <>
      <strong className="block font-bold text-xl text-cyan-500 text-center">
        {title}
      </strong>
      <div className="flex justify-between items-center">
        <span className="block text-sm">
          {status ? "[Completado]" : "[Pendiente]"}
        </span>
        <span className="text-red-400">{important ? "Importante" : null}</span>
      </div>
      <Button
        text={"Eliminar"}
        handleClick={() => handleDelete(id)}
        aria-label={`Eliminar tarea ${title}`}
      />
    </>
  );
}
