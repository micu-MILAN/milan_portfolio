import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
export default function App() {
  return (
    <div className="bg-black w-full h-full ">
      <div>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
