import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./Navbar/Navbar";
import { Footer } from "./components/Footer/footer";
import About from "./components/About/About";
import EducationDescription from "./components/Community/EducationDescription";
import HealthcareDescription from "./components/Community/HealthcareDescription";
import ReligionDescription from "./components/Community/ReligionDescription";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/community/education" element={<EducationDescription />} />
    <Route path="/community/healthcare" element={<HealthcareDescription />} />
    <Route path="/community/religion" element={<ReligionDescription />} />

    </Routes>
    <Footer />
    </>
  );
}

export default App;
