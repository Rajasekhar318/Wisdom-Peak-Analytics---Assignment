import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <div className="h-screen dark:bg-gray-900 dark:text-white">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
