import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <Aboutme />
      </Router>
    </>
  );
}

export default App;
