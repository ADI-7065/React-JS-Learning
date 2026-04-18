import { memo, useCallback, useState } from "react";

const Child = memo(function Child({ addTodo }) {
  console.log("Child re-rendered of WithCallback");
  return (
    <button className="btn btn-primary btn-sm mt-2 me-2" onClick={addTodo}>
      Add Todo
    </button>
  );
});

export default function WithCallback() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = useCallback(() => {
    setTodos([...todos, "New Task"]);
  }, []);

  return (
    <div>
      <h2>WithCallback</h2>
      <h3>Todos: {todos.length}</h3>
      <Child addTodo={addTodo} />
      <button
        className="btn btn-primary btn-sm mt-2 me-2"
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>
      <p>Count: {count}</p>
      {todos.map((t) => (
        <p>{t}</p>
      ))}
    </div>
  );
}
