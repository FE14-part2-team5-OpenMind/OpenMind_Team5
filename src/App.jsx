import styled from 'styled-components';
import './reset.css';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Test = styled.div`
  font-size: var(--caption1-medium);
  color: var(--yellow50);
`;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
