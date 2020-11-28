import React from "react";
import "./css/container.css";
import useContainer from "./useContainer";

export default function Container() {
  const {
    arrObj,
    value,
    handleInput,
    handleSubmit,
    handleEnter,
  } = useContainer();

  return (
    <div className="container">
      <div className="input-container">
        <span>input numbers (in Row):</span>
        <input
          type="text"
          placeholder='rows split with "/"'
          value={value}
          onChange={handleInput}
          onKeyPress={handleEnter}
        />
        <button type="submit" value="submit" onClick={handleSubmit}>
          generate
        </button>
      </div>
      {arrObj.map((element) => (
        <div
          className="create-element"
          key={`field-${element.id}`}
          style={{ flex: element.width }}
        >
          layout {element.id}
        </div>
      ))}
    </div>
  );
}

//algorithm in 40 min
//optimize 15 min
//2hour :/ for design
