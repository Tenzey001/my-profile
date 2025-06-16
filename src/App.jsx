import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
