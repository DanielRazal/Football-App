import './App.css';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import Standings from './components/Standings';
import Leagues from './components/Leagues';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Leagues />} />
          {/* <Route path="/leagues" element={<Content />} /> */}
          <Route path="/leagues" element={<Leagues />} />
          {/* <Route path="/standings" element={<Content />} /> */}
          <Route path="/standings" element={<Standings />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
