import classes from "../styles/MainLayout.module.css";

export default function MainLayout({ children }) {
  return <div className={classes.mainBody}>{children}</div>;
}
