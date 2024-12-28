import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
            
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <strong>Simplify Your Text Manipulations</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Text Util is a versatile web application designed to make working with text seamless and efficient. Whether you need to convert text to lowercase, uppercase, or even remove unwanted spaces, Text Util provides a simple and user-friendly interface to handle all your text manipulation needs. It saves time and effort by providing an intuitive platform to process text with just a few clicks.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              style={myStyle}
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Enhance Productivity with Advanced Features</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            In addition to basic text transformations, Text Util offers unique functionalities such as word count and speech conversion. The word count feature ensures you can easily keep track of your content length, while the speech conversion tool reads your text aloud, making it perfect for accessibility and proofreading. The copy text feature lets you quickly transfer your processed text to other applications, enhancing your productivity in day-to-day tasks.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              style={myStyle}
              aria-controls="collapseThree"
            >
              <strong>Clean, Fast, and Reliable</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Designed with simplicity and performance in mind, Text Util ensures a smooth and distraction-free experience. Its clear text function allows you to reset your workspace in seconds, and every feature is crafted to deliver quick and accurate results. Whether you’re a student, writer, or professional, Text Util adapts to your needs, helping you focus on what truly matters—creating and refining your content.
            </div>
          </div>
        </div>
      </div>
      
      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btnText}
        </button>
      </div>
    </div>
  );
}