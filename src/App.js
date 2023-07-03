import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import NotFoundPage from './Components/NotFoundPage';
import Standings from './Components/Standings';
import Leagues from './Components/Leagues';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Leagues />} />
          {/* <Route path="/leagues" element={<Content />} /> */}
          <Route path="/leagues" element={<Leagues />} />
          {/* <Route path="/standings" element={<Content />} /> */}
          <Route path="/standings" element={<Standings />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
