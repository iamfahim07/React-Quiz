import { Link } from "react-router-dom";
import classes from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.leaderBoard}>
        <Link to="leader-board">
          <button>Leaderboard</button>
        </Link>
      </div>
      <h1 className={classes.introText}>Lets Test Your Football knowledge</h1>

      <div className={classes.startQuiz}>
        <Link to="/rules">
          <button>Start Quiz</button>
        </Link>
      </div>
    </div>
  );
}
