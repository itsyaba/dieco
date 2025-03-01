import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./Navbar/Navbar";
import { Footer } from "./components/Footer/footer";
import About from "./components/About/About";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
