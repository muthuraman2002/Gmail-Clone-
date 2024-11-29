import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Inbox from "./components/Inbox";
import Compose from "./components/Compose";

const  App =()=>{
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <div style={{ flex: 1, backgroundColor: "#f1f3f4" }}>
          <Routes>
            <Route path="/" element={<Inbox />} />
            <Route path="/compose" element={<Compose />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
