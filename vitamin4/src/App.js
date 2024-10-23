import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home/Home';
import NotHome from './pages/NotHome/NotHome';
import Landing from './pages/Landing/Landing';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element = {<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nothome" element={<NotHome />} />
        {/* Redirect to /home if no route matches */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
