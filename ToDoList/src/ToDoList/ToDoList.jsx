import ToDoItem from "../ToDoItem/ToDoItem";

export default function ToDoList({ item, handleDelete }) {
  return (
    <ul className="grid grid-cols-3 gap-8">
      {item.map((item) => (
        <li
          className="flex flex-col gap-2 overflow max-w-[330px]"
          key={item.id}
        >
          <ToDoItem
            id={item.id}
            title={item.text}
            status={item.completed}
            important={item.important}
            handleDelete={handleDelete}
          />
        </li>
      ))}
    </ul>
  );
}
