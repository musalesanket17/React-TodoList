import React from "react";
import TodoItems from "./TodoItem";

export default function Map({ data, handleToggle }) {
  // console.log(data)
  return (
    <div>
      {data.map((el) => (
        <TodoItems
          key={el.id}
          id={el.id}
          title={el.title}
          status={el.status}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
}
