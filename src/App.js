import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Interests from "./components/Interests";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <Aboutme />
        <Interests />
      </Router>
    </>
  );
}

export default App;
