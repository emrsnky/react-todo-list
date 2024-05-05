// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function App() {
  const [list, setList] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (list.trim() !== "") {
      setTodos([...todos, list]);
      setList("");
    }
  };

  const todoList = todos.map((todo, index) => <li key={index}>{todo}</li>);

  return (
    <>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={list}
        onChange={(e) => setList(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>{todoList}</ul>
    </>
  );
}

export default App;
