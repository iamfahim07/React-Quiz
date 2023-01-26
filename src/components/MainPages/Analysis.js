import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useQuestionsAndAnswers from "../../hooks/useQuestionsAndAnswers";
import classes from "../../styles/Analysis.module.css";
import Container from "../Container";
import NextQuestion from "../NextQuestion";
import Question from "../Question";

export default function Analysis() {
  const [index, setIndex] = useState(0);
  const [isAnalysisEnd, setIsAnalysisEnd] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [playerAnswers, setPlayerAnswers] = useState(false);
  const [loading, setLoading] = useState(true);

  const { state } = useLocation();

  const { error, data } = useQuestionsAndAnswers(state.db.quizPath);

  useEffect(() => {
    if (data.length > 0) {
      const answers = data[index].options.map((item) => {
        if (state.answersList[index].includes(item.option)) {
          if (item.correct === true) {
            return { ...item, right: true };
          } else {
            return { ...item, wrong: true };
          }
        }
        return item;
      });

      setPlayerAnswers(answers);
      setLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, index]);

  function nextQuestion() {
    if (index < data.length - 1) {
      setIndex((prev) => prev + 1);

      if (index === data.length - 2) {
        setIsAnalysisEnd(true);
      }
    }

    if (index === data.length - 1) {
      setIsHome(true);
    }
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && data.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}

      {!loading && data.length > 0 && (
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
              isHome={isHome}
              db={state.db}
            />
          </Container>
        </div>
      )}
    </>
  );
}
