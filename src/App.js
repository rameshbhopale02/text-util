import "./App.css";
import About from "./components/About";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    // <h1>hello world</h1>
    <>
      <Navbar title="TextUtil" findtitle="About Us" mode={mode} toggleMode={toggleMode}/>

      <div className="container my-3" >
        <TextForm title="Enter text to analyse" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
