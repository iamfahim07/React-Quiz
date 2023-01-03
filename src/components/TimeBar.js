import classes from "../styles/TimeBar.module.css";

export default function TimeBar({ progress }) {
  return (
    <div className={progress ? classes.timeBar : ""}>
      <hr />
    </div>
  );
}
