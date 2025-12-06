import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { SchoolOnboarding } from './pages/SchoolOnboarding';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<SchoolOnboarding />} />
          <Route path="/school-onboarding" element={<SchoolOnboarding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
