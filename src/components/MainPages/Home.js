import { Link } from "react-router-dom";
import classes from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={classes.home}>
      <Link to="leader-board">
        <p className={classes.leaderBoard}>Leaderboard</p>
      </Link>
      <h1 className={classes.introText}>Lets Test Your Football knowledge</h1>
      <Link to="rules">
        <button className={classes.startQuiz}>Start Quiz</button>
      </Link>
    </div>
  );
}
