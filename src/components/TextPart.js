import { Link } from "react-router-dom";
import classes from "../styles/TextPart.module.css";

export default function TextPart({ intro, quizName, link, bgImg }) {
  return (
    <div className={classes.textContainer} style={bgImg}>
      <h1 className={classes.introText}>{intro}</h1>
      <div className={classes.buttons}>
        <Link to="/rules" className={classes.noUnderline} state={quizName}>
          <button className={classes.startQuiz}>Start Quiz</button>
        </Link>
        <Link to={link} className={classes.noUnderline} state={quizName.lbPath}>
          <button className={classes.leaderBoard}>Leaderboard</button>
        </Link>
      </div>
    </div>
  );
}
