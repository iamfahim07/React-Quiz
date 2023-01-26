import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useName } from "../../context/NameProvider";
import classes from "../../styles/Name.module.css";
import Button from "../Button";

export default function Name() {
  const [name, setName] = useState("");

  const { nameContainer } = useName();

  const { state } = useLocation();

  //   const handleChange = (e) => {
  //     let value = e.target.value;
  //     if (value.trimStart().length === 0) {
  //       setName("");
  //     } else {
  //       value = value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
  //       setName(value);
  //     }
  //   };

  const handleChange = (e) => {
    let value = e.target.value.trimEnd();
    if (value.length === 0) {
      setName("");
    } else {
      value = value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
      setName(value);
    }
  };

  function handleClick() {
    return nameContainer(name);
  }

  return (
    <div className={classes.container}>
      <h1>Enter your first name only</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />

      <div className={classes.buttons}>
        <h3>Name Required</h3>
        <Link to={name.length > 0 ? "/quiz" : ""} state={state}>
          <Button handleClick={handleClick}>Continue</Button>
        </Link>
      </div>
    </div>
  );
}
