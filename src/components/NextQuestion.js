import classes from "../styles/NextQuestion.module.css";

export default function NextQuestion({ currentQn, qnLength, children }) {
  return (
    <div className={classes.nextQuestion}>
      <p>
        <span>{currentQn}</span> of <span>{qnLength}</span> Questions
      </p>
      {children}
    </div>
  );
}
