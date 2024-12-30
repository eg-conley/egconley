import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App.js';
import Projects from './pages/Projects.js';
import ArtDesign from './pages/ArtDesign';

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/moreprojects" element={<Projects />}/>
                <Route path="/moreartdesign" element={<ArtDesign />}/>
            </Routes>
        </Router>
    );
}

export default Routing;