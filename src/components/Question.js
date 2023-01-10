import classes from "../styles/Question.module.css";

export default function Question({
  qn,
  op1,
  op2,
  op3,
  op4,
  mcq,
  handleClick,
  state01,
  state02,
  state03,
  state04,
  dispatch01,
  dispatch02,
  dispatch03,
  dispatch04,
  disabled,
}) {
  return (
    <div className={`${classes.question} ${disabled ? classes.disabled : ""}`}>
      <h1>
        {qn}
        {mcq ? <span> (This question has multiple answers)</span> : ""}
      </h1>
      <div
        className={`${classes.option} ${state01 ? classes.active : ""} ${
          op1.correct ? classes.correct : ""
        } ${op1.right ? classes.correct : op1.wrong ? classes.wrong : ""}`}
        onClick={(e) => {
          handleClick(e);
          dispatch01("toggle");
        }}
      >
        {op1.value}
      </div>
      <div
        className={`${classes.option} ${state02 ? classes.active : ""} ${
          op2.correct ? classes.correct : ""
        } ${op2.right ? classes.correct : op2.wrong ? classes.wrong : ""}`}
        onClick={(e) => {
          handleClick(e);
          dispatch02("toggle");
        }}
      >
        {op2.value}
      </div>
      <div
        className={`${classes.option} ${state03 ? classes.active : ""} ${
          op3.correct ? classes.correct : ""
        } ${op3.right ? classes.correct : op3.wrong ? classes.wrong : ""}`}
        onClick={(e) => {
          handleClick(e);
          dispatch03("toggle");
        }}
      >
        {op3.value}
      </div>
      <div
        className={`${classes.option} ${state04 ? classes.active : ""} ${
          op4.correct ? classes.correct : ""
        } ${op4.right ? classes.correct : op4.wrong ? classes.wrong : ""}`}
        onClick={(e) => {
          handleClick(e);
          dispatch04("toggle");
        }}
      >
        {op4.value}
      </div>
    </div>
  );
}
