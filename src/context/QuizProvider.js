import React, { useContext, useState } from "react";

const QuizContext = React.createContext();

export function useQuiz() {
  return useContext(QuizContext);
}

export function QuizProvider({ children }) {
  const [quiz, setQuiz] = useState("");

  function quizContainer(path) {
    return setQuiz(path);
  }

  const quizDispenser = quiz.length > 0 ? quiz : "";

  const value = {
    quizContainer,
    quizDispenser,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}
