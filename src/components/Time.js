import classes from "../styles/Time.module.css";

export default function Time({ time }) {
  return (
    <div className={classes.questionTime}>
      <h1>Hurry, time's running out!</h1>
      <div className={classes.time}>
        <p>Time Left</p>
        <div>{time}</div>
      </div>
    </div>
  );
}
