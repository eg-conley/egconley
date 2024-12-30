import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App.js';
import MoreProjects from './components/projects/MoreProjects.js';
import MoreArt from './components/art/MoreArt.js';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/moreprojects" element={<MoreProjects/>}/>
                <Route path="/moreart" element={<MoreArt/>}/>
            </Routes>
        </Router>
    );
}

export default Routing;