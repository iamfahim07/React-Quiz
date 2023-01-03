import img from "../../assets/The-FIFA-World-Cup-Trophy.avif";
import classes from "../../styles/Image.module.css";

export default function Image() {
  return (
    <div className={classes.imageContainer}>
      <img src={img} alt="World Cup" />
    </div>
  );
}
