import styled from "styled-components";
import "./reset.css";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndividualFeed from "./pages/IndividualFeed";
import QuestionList from "./pages/QuestionList";

const Test = styled.div`
  font-size: var(--caption1-medium);
  color: var(--yellow50);
`;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post/:id" element={<IndividualFeed />} />
        <Route path="/list" element={<QuestionList />} />
      </Routes>
    </Router>
  );
}

export default App;
