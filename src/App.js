import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import KPCProject from './pages/KPCProject'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Masami Stonebridge</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/kpc-project" element={<KPCProject />} />
          <Route path="/redirect" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
