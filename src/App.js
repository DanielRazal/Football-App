import './App.css';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import NotFoundPage from './Components/NotFoundPage';
import Standings from './Components/Standings';
import Leagues from './Components/Leagues';

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
