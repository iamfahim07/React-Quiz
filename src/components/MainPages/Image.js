import { useEffect, useRef } from "react";
import classes from "../../styles/Image.module.css";

export default function Image({ img, setImgLoading }) {
  const imgRef = useRef(null);

  useEffect(() => {
    setImgLoading(true);
    imgRef.current.onload = () => setImgLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [img]);

  return (
    <div className={classes.imageContainer}>
      <img ref={imgRef} src={img} alt="Quiz" />
    </div>
  );
}
