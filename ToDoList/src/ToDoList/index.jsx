import ToDoItem from "../ToDoItem";

export default function ToDoList({ item }) {
  return (
    <ul>
      {item.map((item) => (
        <li className="flex flex-col" key={item.id}>
          <ToDoItem title={item.text} status={item.completed} />
        </li>
      ))}
    </ul>
  );
}
