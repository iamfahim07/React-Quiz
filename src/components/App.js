import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NameProvider } from "../context/NameProvider";
import "../firebase";
import "../styles/App.css";
import Leaderboard from "./Leaderboard";
import MainLayout from "./MainLayout";
import Analysis from "./MainPages/Analysis";
import Home from "./MainPages/Home";
import Name from "./MainPages/Name";
import Result from "./MainPages/Result";
import Rules from "./MainPages/Rules";
import QuizContainer from "./QuizContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <NameProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="rules" element={<Rules />} />
              <Route path="name" element={<Name />} />
              <Route path="quiz" element={<QuizContainer />} />
              <Route path="result" element={<Result />} />
              <Route path="analysis" element={<Analysis />} />
              <Route path="leader-board" element={<Leaderboard />} />
            </Routes>
          </MainLayout>
        </NameProvider>
      </Router>
    </div>
  );
}

export default App;
