import { useEffect, useState } from "react";
import classes from "../../styles/Home.module.css";
import ImagePart from "../ImagePart";
import TextPart from "../TextPart";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    // const intervalId = setInterval(() => {
    //   setScreenWidth(window.innerWidth);
    // }, 500);

    // return () => {
    //   clearInterval(intervalId);
    // };
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <ImagePart
          img={
            "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/History.jpg?alt=media&token=34439f75-4e99-477e-a672-9c3090704d1c"
          }
        />
        <TextPart
          intro={"Lets Test Your History knowledge"}
          quizName={{ quizPath: "historyQuiz", lbPath: "historyLeaderboard" }}
          link={"leader-board"}
          bgImg={
            screenWidth < 600
              ? {
                  backgroundImage: `URL(
              ${"https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/History.jpg?alt=media&token=34439f75-4e99-477e-a672-9c3090704d1c"}
            )`,
                }
              : {}
          }
        />
      </div>

      <div className={classes.container}>
        <TextPart
          intro={"Lets Test Your Mythology knowledge"}
          quizName={{
            quizPath: "mythologyQuiz",
            lbPath: "mythologyLeaderboard",
          }}
          link={"leader-board"}
          bgImg={
            screenWidth < 600
              ? {
                  backgroundImage: `URL(
              ${"https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Mythology.jpg?alt=media&token=f0aeaf0b-19c7-42e9-a3c7-02ed1a8f9e03"}
            )`,
                }
              : {}
          }
        />
        <ImagePart
          img={
            "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Mythology.jpg?alt=media&token=f0aeaf0b-19c7-42e9-a3c7-02ed1a8f9e03"
          }
        />
      </div>

      <div className={classes.container}>
        <ImagePart
          img={
            "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Old%20Trafford.jpg?alt=media&token=906f5a7b-588e-4a45-b4dc-450557d9e1ac"
          }
        />
        <TextPart
          intro={"Lets Test Your Football knowledge"}
          quizName={{ quizPath: "footballQuiz", lbPath: "footballLeaderboard" }}
          link={"leader-board"}
          bgImg={
            screenWidth < 600
              ? {
                  backgroundImage: `URL(
              ${"https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Old%20Trafford.jpg?alt=media&token=906f5a7b-588e-4a45-b4dc-450557d9e1ac"}
            )`,
                }
              : {}
          }
        />
      </div>
    </div>
  );
}
