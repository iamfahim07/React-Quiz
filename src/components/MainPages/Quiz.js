import { useEffect, useReducer, useState } from "react";
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

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState("");
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

  useEffect(() => {
    setTime(15);
    setProgress(true);
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    setIntervalId(interval);
    setDisabled(false);
    setShow(false);

    return () => clearInterval(interval);
  }, [index]);

  const data = [
    {
      question: "1. Which teams have won the treble in club football?",
      options: [
        { option: "Celtic", correct: true },
        { option: "Real Madrid" },
        { option: "PSV", correct: true },
        { option: "Liverpool" },
      ],
      mcq: true,
    },
    {
      question: "2. who is the top goal scorer in the UCL?",
      options: [
        { option: "Lionel Messi" },
        { option: "Cristiano Ronaldo", correct: true },
        { option: "Karim Benzema" },
        { option: "Robert Lewandowski" },
      ],
    },
    {
      question: "3. who is the top goal scorer in the International Football?",
      options: [
        { option: "Ali Daei" },
        { option: "Lionel Messi" },
        { option: "Cristiano Ronaldo", correct: true },
        { option: "Neymar jr" },
      ],
    },
    {
      question: "4. How many Premier League does MAN UTD won?",
      options: [
        { option: "04" },
        { option: "13", correct: true },
        { option: "09" },
        { option: "15" },
      ],
    },
    {
      question: "5. who is the Premier League winner in 2015-16?",
      options: [
        { option: "MAN UTD" },
        { option: "Arsenal" },
        { option: "Liverpool" },
        { option: "Leicester City", correct: true },
      ],
    },
    {
      question: "6. Who has scored the most goals in a calendar year?",
      options: [
        { option: "Lionel Messi", correct: true },
        { option: "Gerd Muller" },
        { option: "Robert Lewandowski" },
        { option: "Cristiano Ronaldo" },
      ],
    },
    {
      question: "7. Which player has won the most Ballons d'Or?",
      options: [
        { option: "Cristiano Ronaldo" },
        { option: "Johan Cruyff" },
        { option: "Lionel Messi", correct: true },
        { option: "Marco van Basten" },
      ],
    },
    {
      question:
        "8. Which Players has scored in every minute of a football match?",
      options: [
        { option: "Lionel Messi" },
        { option: "Zlatan Ibrahimovic", correct: true },
        { option: "Cristiano Ronaldo", correct: true },
        { option: "Luis Suarez", correct: true },
      ],
      mcq: true,
    },
  ];

  //Button onClick function
  function nextQuestion() {
    const correctAnswers = data[index].options.filter(
      (obj) => obj.correct === true
    );
    checkAnswer(correctAnswers, userAnswers);

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
    <Container>
      <Time time={second} />
      <TimeBar progress={progress} />
      <Question
        qn={data[index].question}
        op1={{ value: data[index].options[0].option }}
        op2={{ value: data[index].options[1].option }}
        op3={{ value: data[index].options[2].option }}
        op4={{ value: data[index].options[3].option }}
        mcq={data[index].mcq}
        handleClick={handleClick}
        state01={state01}
        state02={state02}
        state03={state03}
        state04={state04}
        dispatch01={dispatch01}
        dispatch02={dispatch02}
        dispatch03={dispatch03}
        dispatch04={dispatch04}
        disabled={disabled}
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
      />
    </Container>
  );
}
