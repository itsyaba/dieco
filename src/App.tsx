import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./Navbar/Navbar";
import { Footer } from "./components/Footer/footer";
import About from "./components/About/About";
import EducationDescription from "./components/Community/EducationDescription";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/education" element={<EducationDescription />} />

    </Routes>
    <Footer />
    </>
  );
}

export default App;
