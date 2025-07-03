import { mockTodos } from "../ToDoList/mocks/mockData";

function App() {
  return (
    <main>
      <h1>Hola mundo</h1>
      <section>
        <ul>
          {mockTodos.map((item) => (
            <li key={item.id}>
              <span>{item.text}</span>
              <span>{item.completed ? "[Completado]" : "[Pendiente]"}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
