import { useState } from "react";
import classes from "../styles/QuizContainer.module.css";
import Image from "./MainPages/Image";
import Quiz from "./MainPages/Quiz";

export default function QuizContainer() {
  const [index, setIndex] = useState(0);
  const [imgLoading, setImgLoading] = useState(true);

  const imageLink = [
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Treble.jpg?alt=media&token=5a5f610c-8611-4fa1-9d0e-fce0f1536e51",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/UCL.jpg?alt=media&token=0fbb1f4d-fbca-414f-aea7-742253060adf",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Football%20Match.jpg?alt=media&token=2fccf8bb-05ba-4dda-8a55-5822b8688b52",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Man%20Utd.jpg?alt=media&token=77e3b380-6b9a-4f6c-9ddc-ec7d350ddcea",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Trophy.webp?alt=media&token=e4a724b2-2d6d-443c-8e88-27fff26b623e",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/M%C3%BCller.jpg?alt=media&token=f6b26542-919c-4908-8288-4594bac9fe8a",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Ballon-dOr.jpeg?alt=media&token=2da30d7f-d2eb-469f-8966-6068163cbc3e",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Stadium.jpg?alt=media&token=2e333b9c-b2c0-40ee-a2db-7b244cc2c2bb",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/London.png?alt=media&token=007fa82c-1844-406f-b79a-5b5a4796bd13",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Anfield.jpg?alt=media&token=c8605b29-d91c-4350-8265-2bece42fadea",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Red%20Devil.jpg?alt=media&token=8e98bda3-8a92-4ef0-84d3-d6c5c04c9723",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/The-FIFA-World-Cup-Trophy.avif?alt=media&token=f4b25039-014f-4525-9a22-11fda9cdd4e2",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Jersey.jpg?alt=media&token=5235f0a7-2832-4c3a-87de-5784c5e14008",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Canarie.jpg?alt=media&token=dba7ad2e-9ff5-4322-bd88-54da6310fb46",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/The-FIFA-World-Cup-Trophy.avif?alt=media&token=f4b25039-014f-4525-9a22-11fda9cdd4e2",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Zlatan.webp?alt=media&token=249321b6-e169-4715-a6ec-1fcec4340ff0",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/London.png?alt=media&token=007fa82c-1844-406f-b79a-5b5a4796bd13",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Wales.png?alt=media&token=37b429c9-e62c-47cf-bb3b-42e8cbc10b32",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Spanish%20Club.jpg?alt=media&token=1cc5c547-8b02-40d1-b609-651b95948f9b",
    "https://firebasestorage.googleapis.com/v0/b/react-quiz-76ad9.appspot.com/o/Italian%20Club.jpg?alt=media&token=3cdb428c-1cdd-4ce4-9ace-9cb03d170525",
  ];

  return (
    <div className={classes.quizContainer}>
      <Image img={imageLink[index]} setImgLoading={setImgLoading} />
      <Quiz index={index} setIndex={setIndex} imgLoading={imgLoading} />
    </div>
  );
}
