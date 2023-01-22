import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "../../styles/Result.module.css";
import Button from "../Button";

export default function Result() {
  const { state } = useLocation();
  const { answersList, score, qnLength } = state;
  const navigate = useNavigate();

  const getKeyword = () => {
    if ((score / (qnLength * 5)) * 100 === 100) {
      return "You scored 100%, Great Job!";
    } else if ((score / (qnLength * 5)) * 100 > 90) {
      return "Your score is above 90%, Excellent";
    } else if ((score / (qnLength * 5)) * 100 > 75) {
      return "Your score is above 75%, Very Good";
    } else if ((score / (qnLength * 5)) * 100 > 50) {
      return "Your score is above 50%, Good";
    } else {
      return "Your score is below 50%, Try again";
    }
  };

  return (
    <div className={classes.miniContainer}>
      <div className={classes.resultContainer}>
        <div className={classes.header}>
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/fireworks(2).png?alt=media&token=2e5f4e31-d95c-493b-9618-7a03f67842eb"
            }
            alt="fireworks"
            width={`${window.innerWidth > 600 ? 100 : 50}`}
            height={`${window.innerWidth > 600 ? 100 : 50}`}
          />
          <div className={classes.headerText}>
            <h1>CONGRATULATIONS</h1>
            <p>ON YOUR SUCCESSFUL QUIZ COMPLETION</p>
          </div>
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/fireworks(4).png?alt=media&token=ad06b7b8-441d-4861-a03b-d13f48732922"
            }
            alt="fireworks"
            width={`${window.innerWidth > 600 ? 100 : 50}`}
            height={`${window.innerWidth > 600 ? 100 : 50}`}
          />
        </div>

        <div className={classes.score}>
          <p>Your Score is</p>
          <h2>{score}</h2>
          <p>out of {qnLength * 5}</p>
        </div>

        <h3 className={classes.message}>{getKeyword()}</h3>

        <div className={classes.buttons}>
          <Button
            fontSize={
              window.innerWidth > 600
                ? { fontSize: "25px" }
                : { fontSize: "11px" }
            }
            analysis={() =>
              navigate(
                "/analysis",
                { state: { answersList } },
                { replace: true }
              )
            }
          >
            Show Analysis
          </Button>

          <Link to="/leader-board">
            <Button
              fontSize={
                window.innerWidth > 600
                  ? { fontSize: "25px" }
                  : { fontSize: "11px" }
              }
            >
              leaderBoard
            </Button>
          </Link>

          <Link to="/name">
            <Button
              fontSize={
                window.innerWidth > 600
                  ? { fontSize: "25px" }
                  : { fontSize: "11px" }
              }
            >
              Replay Quiz
            </Button>
          </Link>
          <Link to="/">
            <Button
              fontSize={
                window.innerWidth > 600
                  ? { fontSize: "25px" }
                  : { fontSize: "11px" }
              }
            >
              Quit Quiz
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
