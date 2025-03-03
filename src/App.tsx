import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./Navbar/Navbar";
import { Footer } from "./components/Footer/footer";
import About from "./components/About/About";
import EducationDescription from "./components/Community/EducationDescription";
import HealthcareDescription from "./components/Community/HealthcareDescription";
import ReligionDescription from "./components/Community/ReligionDescription";
import ScrollToTop from "./lib/ScrollToTop";
import Macoros from "./components/Heritage/Macoros";
import VillagesPage from "./components/Heritage/Village";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/community/education" element={<EducationDescription />} />
        <Route
          path="/community/healthcare"
          element={<HealthcareDescription />}
        />
        <Route path="/community/religion" element={<ReligionDescription />} />

        <Route path="/heritage/village" element={<VillagesPage />} />
        <Route path="/heritage/macoros" element={<Macoros />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
