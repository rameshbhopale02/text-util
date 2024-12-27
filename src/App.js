// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    // <h1>hello world</h1>
    <>
      <Navbar title="TextUtil" findtitle="About Us" />

      <div className="container my-3">
        <TextForm title="Enter text to analyse" />
      </div>
    </>
  );
}

export default App;
