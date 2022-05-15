import Home from "./Home";
import Detail from "./Detail";
import Contact from "./Contact";
import About from "./About";
import { Routes, Route } from "react-router-dom";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Pages;
