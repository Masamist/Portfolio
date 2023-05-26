import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import KPCProject from './pages/KPCProject'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/kpc-project" element={<KPCProject />} />
          <Route path="/redirect" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
