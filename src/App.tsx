import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import { Footer } from "./components/Footer/footer";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
