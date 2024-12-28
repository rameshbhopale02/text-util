import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    // <h1>hello world</h1>
    <>
      <Navbar title="TextUtil" findtitle="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />

      <div className="container my-3" >
        <TextForm title="Enter text to analyse" mode={mode} alert={alert}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
