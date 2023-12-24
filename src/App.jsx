
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Pleer from "./components/Pleer/Pleer";
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Galary from "./pages/galary"
import Galarys from "./pages/Galarys"
import Home from "./pages/Home"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/main.css'

const App = () => (
  <>
    <Router>
      <Navbar />
      <div className="box-scrollbar">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/galary" element={<Galary />} />
          <Route path="/galarys" element={<Galarys />} />
          <Route path="/music" element={<Pleer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </Router>


  </>

);

export default App;
