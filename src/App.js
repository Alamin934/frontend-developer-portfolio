import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import ProjectDetails from './pages/Home/ProjectDetails/ProjectDetails';
import AOS from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1200,
      easing: 'linear'
    })
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="myProject/:projectId" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
