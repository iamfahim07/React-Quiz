import classes from "../styles/Container.module.css";

export default function Container({ children, answer }) {
  return (
    <div
      className={`${classes.container} ${
        answer ? classes.answerContainer : ""
      }`}
    >
      {answer && (
        <h1
          className={`${classes.answerText} ${
            answer === "Your Answer" ? classes.yourAnswerText : ""
          }`}
        >
          {answer}
        </h1>
      )}
      {children}
    </div>
  );
}
