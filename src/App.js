import "./App.css";
import About from "./components/About";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    // <h1>hello world</h1>
    <>
      <Navbar title="TextUtil" findtitle="About Us" />

      <div className="container my-3">
        <TextForm title="Enter text to analyse" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
