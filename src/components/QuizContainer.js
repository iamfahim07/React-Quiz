import { useState } from "react";
import classes from "../styles/QuizContainer.module.css";
import Image from "./MainPages/Image";
import Quiz from "./MainPages/Quiz";

export default function QuizContainer() {
  const [index, setIndex] = useState(0);
  const [imgLoading, setImgLoading] = useState(true);
  const [imageLink, setImageLink] = useState([]);

  return (
    <div className={classes.quizContainer}>
      <Image img={imageLink[index]} setImgLoading={setImgLoading} />
      <Quiz
        index={index}
        setIndex={setIndex}
        imgLoading={imgLoading}
        setImageLink={setImageLink}
      />
    </div>
  );
}
