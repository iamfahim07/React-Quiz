import { useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "../../styles/Analysis.module.css";
import Container from "../Container";
import NextQuestion from "../NextQuestion";
import Question from "../Question";

export default function Analysis() {
  const [index, setIndex] = useState(0);
  const [isAnalysisEnd, setIsAnalysisEnd] = useState(false);

  const { state } = useLocation();

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

  function nextQuestion() {
    if (index < data.length - 1) {
      setIndex((prev) => prev + 1);

      if (index === data.length - 2) {
        setIsAnalysisEnd(true);
      }
    }
  }

  const playerAnswers = data[index].options.map((item) => {
    if (state.answersList[index].includes(item.option)) {
      if (item.correct === true) {
        return { ...item, right: true };
      } else {
        return { ...item, wrong: true };
      }
    }
    return item;
  });
  console.log(playerAnswers);

  return (
    <div className={classes.analysis}>
      <Container answer={"Correct Answer"}>
        <Question
          qn={data[index].question}
          op1={{
            value: data[index].options[0].option,
            correct: data[index].options[0].correct,
          }}
          op2={{
            value: data[index].options[1].option,
            correct: data[index].options[1].correct,
          }}
          op3={{
            value: data[index].options[2].option,
            correct: data[index].options[2].correct,
          }}
          op4={{
            value: data[index].options[3].option,
            correct: data[index].options[3].correct,
          }}
          mcq={data[index].mcq}
          disabled={true}
        />
      </Container>

      <Container answer={"Your Answer"}>
        <Question
          qn={data[index].question}
          op1={{
            value: data[index].options[0].option,
            right: playerAnswers[0].right,
            wrong: playerAnswers[0].wrong,
          }}
          op2={{
            value: data[index].options[1].option,
            right: playerAnswers[1].right,
            wrong: playerAnswers[1].wrong,
          }}
          op3={{
            value: data[index].options[2].option,
            right: playerAnswers[2].right,
            wrong: playerAnswers[2].wrong,
          }}
          op4={{
            value: data[index].options[3].option,
            right: playerAnswers[3].right,
            wrong: playerAnswers[3].wrong,
          }}
          disabled={true}
        />
        <hr />
        <NextQuestion
          currentQn={index + 1}
          qnLength={data.length}
          show={true}
          nextQuestion={nextQuestion}
          isAnalysisEnd={isAnalysisEnd}
        />
      </Container>
    </div>
  );
}
