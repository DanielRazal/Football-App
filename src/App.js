import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leagues from './Components/Leagues';
import Standings from './Components/Standings';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />

      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Content />} /> */}
            {/* <Route path="/leagues" element={<Leagues />} /> */}
            <Route path="/standings" element={<Standings />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
