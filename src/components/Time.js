import classes from "../styles/Time.module.css";

export default function Time({ time }) {
  return (
    <div className={classes.questionTime}>
      <h1>Hurry, time's running out!</h1>
      <div
        className={`${classes.time} ${
          time < 11 ? classes.redSignal : time < 21 ? classes.yellowSignal : ""
        }`}
      >
        <p>{time > 0 ? "Time Left" : "Time up"}</p>
        <div>{time}</div>
      </div>
    </div>
  );
}
