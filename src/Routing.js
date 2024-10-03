import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App.js';
import About from './pages/About.js';
import Experience from './pages/Experience.js';
import Projects from './pages/Projects.js';
import ArtDesign from './pages/ArtDesign';
import Contact from './pages/Contact';

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/experience" element={<Experience />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/artdesign" element={<ArtDesign />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </Router>
    );
}

export default Routing;