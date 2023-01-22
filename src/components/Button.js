import classes from "../styles/Button.module.css";

export default function Button({
  nextQuestion,
  nextPage,
  leaderBoard,
  analysis,
  handleClick,
  fontSize,
  children,
}) {
  return (
    <button
      style={fontSize}
      onMouseDown={nextQuestion}
      onClick={nextPage || analysis || leaderBoard || handleClick}
      className={classes.button}
    >
      {children}
    </button>
  );
}
