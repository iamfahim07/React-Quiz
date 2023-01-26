import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useName } from "../context/NameProvider";
import useLeaderboard from "../hooks/useLeaderboard";
import classes from "../styles/NextQuestion.module.css";
import Button from "./Button";

export default function NextQuestion({
  currentQn,
  qnLength,
  show,
  nextQuestion,
  isFinished,
  score,
  answersList,
  isAnalysisEnd,
  isHome,
  duration,
  db,
}) {
  const navigate = useNavigate();

  const { nameDispenser } = useName();

  const { leaderboard, setLeaderboardData } = useLeaderboard(db.lbPath);

  useEffect(() => {
    if (nameDispenser === "") {
      return navigate("/", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function nextPage() {
    if (isFinished) {
      const quizInfo = {
        name: nameDispenser,
        time: qnLength * 30 - duration,
        score: score,
      };

      const allQuizInfo = [...leaderboard, quizInfo];

      for (let i = 0; i < allQuizInfo.length; i++) {
        allQuizInfo.sort(function (a, b) {
          if (b.score === a.score) {
            if (a.time === b.time) {
              return a.name < b.name ? -1 : 1;
            }
            return a.time - b.time;
          }
          return b.score - a.score;
        });
      }

      if (allQuizInfo.length > 7) {
        allQuizInfo.splice(7, 1);
        setLeaderboardData(allQuizInfo);
      } else {
        setLeaderboardData(allQuizInfo);
      }

      return navigate(
        "/result/",
        { state: { score, qnLength, answersList, db } },
        { replace: true }
      );
    }

    if (isHome) {
      return navigate("/", { replace: true });
    }
  }

  return (
    <div className={classes.nextQuestion}>
      <p>
        <span>{currentQn}</span> of <span>{qnLength}</span> Questions
      </p>
      {show && (
        <Button nextQuestion={nextQuestion} nextPage={nextPage}>
          {isFinished || isAnalysisEnd ? "Finished" : "Next Question"}
        </Button>
      )}
    </div>
  );
}
