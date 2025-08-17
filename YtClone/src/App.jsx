import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VideoProvider } from "./context/VideoContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

function App() {
  return (
    <VideoProvider>
      <Router>
        <div className="app">
          <Header />
          <div className="app__page">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watch/:videoId" element={<Watch />} />
            </Routes>
          </div>
        </div>
      </Router>
    </VideoProvider>
  );
}

export default App;
