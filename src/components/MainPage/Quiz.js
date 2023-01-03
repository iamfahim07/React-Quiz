import { useEffect, useState } from "react";
import Container from "../Container";
import NextQuestion from "../NextQuestion";
import Question from "../Question";
import Time from "../Time";
import TimeBar from "../TimeBar";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(0);
  const [progress, setProgress] = useState();
  const [intervalId, setIntervalId] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setTime(15);
    setProgress(true);
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    setIntervalId(interval);

    return () => clearInterval(interval);
  }, [index]);

  const data = [
    {
      qn: "1. who is the top goal scorer in the FIFA world cup.",
      op1: "Miroslav Klose",
      op2: "Ronaldo",
      op3: "Gerd Müller",
      op4: "Just Fontaine",
    },
    {
      qn: "2. who is the top goal scorer in the UCL.",
      op1: "Lionel Messi",
      op2: "Cristiano Ronaldo",
      op3: "Karim Benzema",
      op4: "Robert Lewandowski",
    },
    {
      qn: "3. who is the top goal scorer in the International Football.",
      op1: "Ali Daei",
      op2: "Lionel Messi",
      op3: "Cristiano Ronaldo",
      op4: "Neymar jr",
    },
  ];

  function nextQuestion() {
    if (index < data.length - 2) {
      setIndex((prev) => prev + 1);
      setProgress(false);
    } else if (index < data.length - 1) {
      setIndex((prev) => prev + 1);
      setProgress(false);
      setIsFinished(true);
    }
  }

  if (time === 0) {
    clearInterval(intervalId);
  }

  function handleClick(e) {
    console.log("ok");
    return e.target.classList.add("active");
  }

  const second = time.toString().padStart(2, "0");

  return (
    <Container>
      <Time time={second} />
      <TimeBar progress={progress} />
      <Question
        qn={data[index].qn}
        op1={data[index].op1}
        op2={data[index].op2}
        op3={data[index].op3}
        op4={data[index].op4}
        handleClick={handleClick}
      />
      <hr />
      <NextQuestion currentQn={index + 1} qnLength={data.length}>
        <button onClick={nextQuestion}>
          {isFinished ? "Finished" : "Next Question"}
        </button>
      </NextQuestion>
    </Container>
  );
}
