import React, { useState } from "react";
import Addtodos from "./AddTodos";
// import TodoItems from "./TodoItem";
import Map from "./Map";

export default function Todos() {
  const [todo, setTodo] = useState([]);
  const handleAdd = (text) => {
    setTodo([
      ...todo,
      {
        id: todo.length + Date.now(),
        title: text,
        status: false
      }
    ]);
  };

  const handleToggle = (id) => {
    //  <h2>OK</h2>
    const updated = todo.map((el) =>
      // console.log({el})
      el.id === id ? { ...el, status: !el.status } : el
    );
    setTodo(updated);
  };
  // console.log(todo);
  return (
    <>
      <Addtodos handleAdd={handleAdd} />
      <Map data={todo} handleToggle={handleToggle} />
    </>
  );
}
