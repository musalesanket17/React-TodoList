import React, { useState } from "react";

export default function Todos({ handleAdd }) {
  const [text, setText] = useState("");
  // console.log(props.handleAdd)
  // console.log(handleAdd)

  return (
    <>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />

      <button onClick={() => handleAdd(text)}> Add</button>
    </>
  );
}
