import { Link } from "react-router-dom";
import classes from "../../styles/Rules.module.css";

export default function Rules() {
  return (
    <div className={classes.rulesContainer}>
      <h1>Some Rules</h1>
      <hr />
      <div className={classes.textContainer}>
        <p>
          1. You will have only <span>30 seconds</span> per each question.
        </p>
        <p>2. Once you select your answer, it can't be undone.</p>
        <p>3. You can't select any option once time goes off.</p>
        <p>4. You can't exit from the Quiz while you're playing.</p>
        <p>5. You'll get 5 points for each of your correct answers.</p>
        <p>6. There will be multiple answers for some question.</p>
        <p>
          7. You must correctly answer the multiple choice question to earn full
          marks.
        </p>
      </div>
      <hr />
      <div className={classes.buttons}>
        <Link to="/">
          <button>Quit</button>
        </Link>
        <Link to="/quiz">
          <button>Continue</button>
        </Link>
      </div>
    </div>
  );
}
