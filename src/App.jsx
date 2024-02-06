import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import EducationHub from "./pages/EducationHub";
import { Teams } from "./pages/Teams";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="  h-[100dvh]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/activities" element={<Activities />} />
          <Route exact path="/educationhub" element={<EducationHub />} />
          <Route exact path="/teams" element={<Teams />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
