import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");
  const [copied, setCopied] = useState(false);
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleUpClick2 = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const handleUpClick3 = () => {
   
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

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.textContent == "Speak") {
      toogle.innerHTML = "Stop";
    } else {
      toogle.innerHTML = "Speak";
      if ((toogle.innerHTML = "Speak")) {
        window.speechSynthesis.cancel();
      }
    }
  };


  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .catch((err) => console.error("failed to copy the text: " + err));
  }; 

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="mb-3 textForm" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
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
        <button
          type="submit"
          onClick={speak}
          className="btn btn-primary"
          id="toggle"
        >
          Speak
        </button>

        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          {copied ? "Copied" : "Copy to Clipboard"}
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
        <h1>Your text summary</h1>
        <p>
          {text.split(",").length} words and {text.length} characters{" "}
        </p>

        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p style={{border: '2px solid blue', padding: '5px' , textAlign: 'center'}}>{text}</p>
      </div>
    </>
  );
}
