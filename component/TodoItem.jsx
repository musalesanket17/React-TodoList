import React from "react";

export default function TodoItems({ id, title, status, handleToggle }) {
  //  console.log(id)
  return (
    <>
      <h1>{title}</h1>
      <h1>{id}</h1>
      <h1>{status ? "Done" : "Not done"}</h1>
      <button onClick={() => handleToggle(id)}>Toggle</button>
    </>
  );
}
