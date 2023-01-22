import { Link } from "react-router-dom";
import classes from "../../styles/Rules.module.css";
import Button from "../Button";

export default function Rules() {
  return (
    <div className={classes.rulesContainer}>
      <h1>Some Rules</h1>
      <hr />
      <div className={classes.textContainer}>
        <p>
          1. You will have only <span>30 seconds</span> per each question.
        </p>
        <p>2. Once you submit your answer, it can't be changed.</p>
        <p>3. You can't select options once time goes off.</p>
        <p>4. You can't exit from the Quiz while you're playing.</p>
        <p>5. You'll get 5 points for each of your correct answers.</p>
        <p>6. There will be multiple answers for some question.</p>
        <p>
          7. You must correctly answer the multiple choice question to earn full
          marks.
        </p>
        <p>8. You have to be in top 7 to see your name inside leaderboard.</p>
        <p>
          9. If two or more players have the same score, the leaderboard will be
          determined based on the time taken by each player to achieve the
          score.
        </p>
      </div>
      <hr />
      <div className={classes.buttons}>
        <Link to="/">
          <Button>Quit</Button>
        </Link>
        <Link to="/name">
          <Button>Continue</Button>
        </Link>
      </div>
    </div>
  );
}
