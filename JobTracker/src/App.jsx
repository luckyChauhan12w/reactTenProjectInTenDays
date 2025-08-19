// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JobProvider } from "./context/JobContext";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Jobs from "./pages/Jobs";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <JobProvider>
      <Router>
        <div className="flex h-screen bg-gray-900 text-white">
          <Sidebar />
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/jobs" element={<Jobs />} />
            </Routes>
          </div>
        </div>
      </Router>
    </JobProvider>
  );
}

export default App;
