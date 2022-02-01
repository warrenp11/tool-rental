import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tools from "./components/Tools";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Tools />
    </div>
  );
}

export default App;
