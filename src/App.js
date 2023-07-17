import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Interests from "./components/Interests";
import PortPolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <Aboutme />
        <Interests />
        <PortPolio />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
