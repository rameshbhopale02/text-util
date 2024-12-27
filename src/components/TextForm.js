import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleUpClick2 = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const handleUpClick3 = () => {
    // let newText = text.clear();

    setText("");
  };

  const handleUpClick4 = () => {
    let newText = "";
    let i = 0;
    while (i < text.length && text[i] === " ") {
      i++;
    }

    while (i < text.length) {
      while (i < text.length && text[i] !== " ") {
        newText += text[i];
        i++;
      }
      if (i < text.length) {
        newText += " ";
      }
      while (i < text.length && text[i] === " ") {
        i++;
      }
    }

    setText(newText);
  };
  

 
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div class="mb-3">
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="textForm"
            rows="8"
          ></textarea>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleUpClick2}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleUpClick3}>
          Clear Text
        </button>
        <button className="btn btn-primary" onClick={handleUpClick4}>
          remove Whitespaces
        </button>
      
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(",").length} words and {text.length} characters{" "}
        </p>

        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
