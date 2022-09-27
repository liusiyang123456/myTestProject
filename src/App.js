import "./styles.css";
import "antd/dist/antd.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustormerList from "./pages/custormerList";
import Detail from "./pages/detail";
import Edit from "./pages/edit";
export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<CustormerList />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
            <Route path="/edit" element={<Edit />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
