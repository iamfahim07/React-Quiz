import { useEffect, useReducer, useState } from "react";
import useQuestionsAndAnswers from "../../hooks/useQuestionsAndAnswers";
import Container from "../Container";
import NextQuestion from "../NextQuestion";
import Question from "../Question";
import Time from "../Time";
import TimeBar from "../TimeBar";

const reducer = (state, action) => {
  switch (action) {
    case "toggle":
      return (state = !state);
    case "remove":
      return (state = false);
    default:
      return state;
  }
};

export default function Quiz({ index, setIndex, imgLoading }) {
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState();
  const [intervalId, setIntervalId] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [answersList, setanswersList] = useState([]);
  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [state01, dispatch01] = useReducer(reducer, false);
  const [state02, dispatch02] = useReducer(reducer, false);
  const [state03, dispatch03] = useReducer(reducer, false);
  const [state04, dispatch04] = useReducer(reducer, false);

  const { loading, error, data } = useQuestionsAndAnswers();

  useEffect(() => {
    setTime(30);
    setProgress(!imgLoading ? true : false);
    const interval = !imgLoading
      ? setInterval(() => {
          setTime((prev) => prev - 1);
        }, 1000)
      : "";
    setIntervalId(interval);
    setDisabled(false);
    setShow(false);

    return () => clearInterval(interval);
  }, [index, imgLoading]);

  //Button onClick function
  function nextQuestion() {
    const correctAnswers = data[index].options.filter(
      (obj) => obj.correct === true
    );
    checkAnswer(correctAnswers, userAnswers);

    setDuration((prev) => prev + time);

    dispatch01("remove");
    dispatch02("remove");
    dispatch03("remove");
    dispatch04("remove");

    setanswersList((prev) => [...prev, userAnswers]);

    setUserAnswers([]);

    if (index < data.length - 1) {
      setIndex((prev) => prev + 1);
      setProgress(false);
      setShow(false);

      if (index === data.length - 2) {
        setIsFinished(true);
      }
    }
  }

  //Checking Answers
  function checkAnswer(correctAnswers, userAnswers) {
    if (correctAnswers.length !== userAnswers.length) {
      return setScore((prev) => prev);
    }

    let areEqual = true;
    correctAnswers.forEach((answer) => {
      if (!userAnswers.includes(answer.option)) {
        areEqual = false;
      }
    });

    return areEqual ? setScore((prev) => prev + 5) : setScore((prev) => prev);
  }

  //Time left function
  if (time === 0) {
    clearInterval(intervalId);
    if (!disabled) {
      setDisabled(true);
    }
    if (!show) {
      setShow(true);
    }
  }

  //Selecting Answer
  function handleClick(e) {
    if (userAnswers.includes(e.target.innerText)) {
      const newAnswers = userAnswers.filter(
        (answers) => answers !== e.target.innerText
      );
      setUserAnswers(newAnswers);
    } else {
      setUserAnswers((prev) => [...prev, e.target.innerText]);
    }
    setShow(true);
  }

  const second = time < 10 ? `${0}${time}` : time;

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && data.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}

      {!loading && data.length > 0 && (
        <Container>
          <Time time={second} />
          <TimeBar progress={progress} />
          <Question
            qn={
              !imgLoading
                ? data[index].question
                : "Await the culmination of the image's loading process"
            }
            op1={!imgLoading ? { value: data[index].options[0].option } : ""}
            op2={!imgLoading ? { value: data[index].options[1].option } : ""}
            op3={!imgLoading ? { value: data[index].options[2].option } : ""}
            op4={!imgLoading ? { value: data[index].options[3].option } : ""}
            mcq={!imgLoading ? data[index].mcq : ""}
            handleClick={handleClick}
            state01={state01}
            state02={state02}
            state03={state03}
            state04={state04}
            dispatch01={dispatch01}
            dispatch02={dispatch02}
            dispatch03={dispatch03}
            dispatch04={dispatch04}
            disabled={!imgLoading ? disabled : true}
          />
          <hr />
          <NextQuestion
            currentQn={index + 1}
            qnLength={data.length}
            show={show}
            nextQuestion={nextQuestion}
            isFinished={isFinished}
            score={score}
            answersList={answersList}
            duration={duration}
          />
        </Container>
      )}
    </>
  );
}
