import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../styles/NextQuestion.module.css";

export default function NextQuestion({
  currentQn,
  qnLength,
  show,
  nextQuestion,
  isFinished,
  score,
  userAnswers,
  data,
  index,
}) {
  // const [point, setPoint] = useState(0);
  const navigate = useNavigate();

  // function calculate() {
  //   const correctAnswers = data[index].options.filter(
  //     (obj) => obj.correct === "true"
  //   );

  //   if (correctAnswers.length !== userAnswers.length) {
  //     return setPoint((prev) => prev);
  //   }

  //   let areEqual = true;
  //   correctAnswers.forEach((answer) => {
  //     if (!userAnswers.includes(answer.option)) {
  //       areEqual = false;
  //     }
  //   });

  //   return areEqual ? setPoint((prev) => prev + 5) : setPoint((prev) => prev);
  // }

  useEffect(() => {
    function result() {
      const result = isFinished
        ? navigate("/result/", { state: score }, { replace: true })
        : "";
      return result;
    }

    result();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFinished]);

  return (
    <div className={classes.nextQuestion}>
      <p>
        <span>{currentQn}</span> of <span>{qnLength}</span> Questions
      </p>
      {show && (
        // <Link to={isFinished ? "/result" : ""}>
        <button
          onClick={() => {
            nextQuestion();
            // calculate();
          }}
        >
          {isFinished ? "Finished" : "Next Question"}
        </button>
        // </Link>
      )}
    </div>
  );
}
