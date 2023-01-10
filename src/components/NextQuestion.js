import { useNavigate } from "react-router-dom";
import classes from "../styles/NextQuestion.module.css";

export default function NextQuestion({
  currentQn,
  qnLength,
  show,
  nextQuestion,
  isFinished,
  score,
  answersList,
  isAnalysisEnd,
}) {
  const navigate = useNavigate();

  function nextPage() {
    if (isFinished) {
      return navigate(
        "/result/",
        { state: { score, qnLength, answersList } },
        { replace: true }
      );
    }

    if (isAnalysisEnd) {
      return navigate("/", { replace: true });
    }
  }

  return (
    <div className={classes.nextQuestion}>
      <p>
        <span>{currentQn}</span> of <span>{qnLength}</span> Questions
      </p>
      {show && (
        <button onMouseDown={nextQuestion} onClick={nextPage}>
          {isFinished || isAnalysisEnd ? "Finished" : "Next Question"}
        </button>
      )}
    </div>
  );
}
