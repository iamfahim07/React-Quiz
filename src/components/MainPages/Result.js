import { Link, useLocation, useNavigate } from "react-router-dom";
import secondImg from "../../assets/fireworks(2).png";
import firstImg from "../../assets/fireworks(4).png";
import classes from "../../styles/Result.module.css";

export default function Result() {
  const { state } = useLocation();
  const { answersList } = state;
  const navigate = useNavigate();

  const getKeyword = () => {
    if ((state.score / (state.qnLength * 5)) * 100 === 100) {
      return "You scored 100%, Great Job!";
    } else if ((state.score / (state.qnLength * 5)) * 100 > 90) {
      return "Your score is above 90%, Excellent";
    } else if ((state.score / (state.qnLength * 5)) * 100 > 75) {
      return "Your score is above 75%, Very Good";
    } else if ((state.score / (state.qnLength * 5)) * 100 > 50) {
      return "Your score is above 50%, Good";
    } else {
      return "Your score is below 50%, Try again";
    }
  };

  return (
    <div>
      <div className={classes.resultContainer}>
        <div className={classes.header}>
          <img src={firstImg} alt="fireworks" width="100" height="100" />
          <div className={classes.headerText}>
            <h1>CONGRATULATIONS</h1>
            <p>ON YOUR SUCCESSFUL QUIZ COMPLETION</p>
          </div>
          <img src={secondImg} alt="fireworks" width="100" height="100" />
        </div>

        <div className={classes.score}>
          <p>Your Score is</p>
          <h2>{state.score}</h2>
          <p>out of {state.qnLength * 5}</p>
        </div>

        <h3 className={classes.message}>{getKeyword()}</h3>

        <div className={classes.buttons}>
          <button
            onClick={() =>
              navigate(
                "/analysis",
                { state: { answersList } },
                { replace: true }
              )
            }
          >
            Show Analysis
          </button>
          <Link to="/leader-board">
            <button>leaderBoard</button>
          </Link>
          <Link to="/rules">
            <button>Replay Quiz</button>
          </Link>
          <Link to="/">
            <button>Quit Quiz</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
