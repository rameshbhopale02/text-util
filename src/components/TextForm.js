import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // showAlert("Converted to Uppercase", "success");
  };

  const handleUpClick2 = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    //  ("Converted to LowerCase", "success");
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
    // showAlert("Text Cleared", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.textContent === "Speak") {
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
      .then(() => {
        setCopied(true);
        // showAlert("Text copied", "success"); // Call your alert function here
      })
      .catch((err) => console.error("Failed to copy the text: " + err));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="mb-3 textForm"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="textForm"
            rows="8"
          ></textarea>
        </div>
      </div>
      <div>
       
        <button className="btn btn-primary mx-1 my-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary  mx-1 my-1 my-1" onClick={handleUpClick2}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary  mx-1 my-1 my-1" onClick={handleUpClick3}>
          Clear Text
        </button>
        <button className="btn btn-primary  mx-1 my-1 my-1" onClick={handleUpClick4}>
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
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {/* {text.split(" ").length} words and {text.length} characters{" "} */}
          <p>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words, {text.length} Characters
          </p>
        </p>

        <p>{0.008 *  text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter something in the textbox above to preview it here"}
          
        </p>
      </div>
    </>
  );
}
