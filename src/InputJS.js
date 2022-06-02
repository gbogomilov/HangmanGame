import React from "react";
import "./Card.css";

const InputJS = (props) => {
  return (
    <div>
      <input
        className="theform"
        type="text"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />{" "}
    </div>
  );
};

export default InputJS;
