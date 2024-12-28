import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      // alert("TextUtil is amazing!");
      setInterval(() => {
        document.title = "TextUtil is amazing";
      }, 2000);
      setInterval(() => {
        // document.title = 'Install TextUtil now';
        // alert("Install TextUtil now");
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    // <h1>hello world</h1>

    <Router>
      <Navbar
        title="TextUtil"
        findtitle="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <div className="container my-3">

    
        <Routes>
          <Route exact path="/about" 
            element={<About />} />
          <Route
            path="/"
            element={
              <TextForm
                title="Enter text to analyse"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
