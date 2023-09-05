import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
