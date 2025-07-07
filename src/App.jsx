import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./pages/About";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Navbar from "./components/Navbar";
import OurProcess from "./pages/OurProcess";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourProcess" element={<OurProcess />} />
        <Route path="/library" element={<Library />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
