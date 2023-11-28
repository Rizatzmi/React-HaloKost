import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Detail from "./Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/gallery/:id" element={<Detail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
