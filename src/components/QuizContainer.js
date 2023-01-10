import classes from "../styles/QuizContainer.module.css";
import Image from "./MainPages/Image";
import Quiz from "./MainPages/Quiz";

export default function QuizContainer() {
  return (
    <div className={classes.quizContainer}>
      <Image />
      <Quiz />
    </div>
  );
}
