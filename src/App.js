import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Inbox from "./components/Inbox";
import Compose from "./components/Compose";
import Login from "./components/Login/Login";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        {isLoggedIn && <Sidebar />} {/* Show Sidebar only if logged in */}
        <div style={{ flex: 1, backgroundColor: "#f1f3f4" }}>
          <Routes>
            {/* Public Route */}
            <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
            
            {/* Protected Routes */}
            <Route 
              path="/compose" 
              element={isLoggedIn ? <Compose /> : <Navigate to="/" />} 
            />
            <Route 
              path="/inbox" 
              element={isLoggedIn ? <Inbox /> : <Navigate to="/" />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
