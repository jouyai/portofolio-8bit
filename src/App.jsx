import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import DevPathLanding from './pages/DevPathLanding';
import DevPathQuest from './pages/DevPathQuest';
import Leaderboard from './pages/Leaderboard';

// Components
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dev-path" element={<DevPathLanding />} />
        <Route path="/dev-path/quest/:pathId" element={<DevPathQuest />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}
