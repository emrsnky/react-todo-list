// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [list, setList] = useState("");
  const [todos, setTodos] = useState([]);

  const ListItem = styled.li`
    cursor: pointer;
  `;

  const addTodo = () => {
    if (list.trim() !== "") {
      setTodos([...todos, list]);
      setList("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const todoList = todos.map((todo, index) => (
    <ListItem key={index} onClick={() => removeTodo(index)}>
      {todo}
    </ListItem>
  ));

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

