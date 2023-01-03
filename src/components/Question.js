import classes from "../styles/Question.module.css";

export default function Question({ qn, op1, op2, op3, op4, handleClick }) {
  return (
    <div className={classes.question}>
      <h1>{qn}</h1>
      <div className={classes.option} onClick={handleClick}>
        {op1}
      </div>
      <div className={classes.option} onClick={handleClick}>
        {op2}
      </div>
      <div className={classes.option} onClick={handleClick}>
        {op3}
      </div>
      <div className={classes.option} onClick={handleClick}>
        {op4}
      </div>
    </div>
  );
}
