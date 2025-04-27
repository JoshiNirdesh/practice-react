import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("Enter your text here");

  const handleCLick = () => {
    console.log("Uppercase Clicked");
    setText("You have clicked uppercase");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3 my-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleCLick}>
        Convert tot Uppercase
      </button>
    </div>
  );
};

export default TextForm;
