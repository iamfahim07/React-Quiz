import classes from "../styles/ImagePart.module.css";

export default function ImagePart({ img }) {
  return (
    <div className={classes.imgContainer}>
      <img src={img} alt={"Quiz"} />
    </div>
  );
}
