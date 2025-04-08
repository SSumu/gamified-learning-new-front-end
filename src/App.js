import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../src/components/Dashboard';
import Navbar from '../src/components/Navbar';
import Students from "../src/pages/Students";
import Courses from "../src/pages/Courses";
import Rewards from "../src/pages/Rewards";
import Challenges from "../src/pages/Challenges";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
    </Router>
  );
}

export default App;
