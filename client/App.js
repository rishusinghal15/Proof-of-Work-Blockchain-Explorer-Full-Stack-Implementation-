import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blockchain from "./components/Blockchain";
import MineBlock from "./components/MineBlock";
import Network from "./components/Network";
import Stats from "./components/Stats";

import "./App.css";   // make sure this is imported

function App() {
  return (
    <Router>
      <div>
        <h1> Proof of Work Blockchain Explorer</h1>

        {/* Navigation Bar */}
        <div className="nav">
        <Link to="/">Explorer</Link>
        <Link to="/mine">Mine Blocks</Link>
        <Link to="/network">Network</Link>
        <Link to="/stats">Stats</Link>
</div>



        <Routes>
        <Route path="/" element={<Blockchain />} />
        <Route path="/mine" element={<MineBlock />} />
        <Route path="/network" element={<Network />} />
        <Route path="/stats" element={<Stats />} />
       </Routes>

      </div>
    </Router>
  );
}

export default App;
