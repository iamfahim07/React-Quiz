import { useEffect } from "react";
import { Link } from "react-router-dom";
import useLeaderboard from "../hooks/useLeaderboard";
import classes from "../styles/Leaderboard.module.css";
import Button from "./Button";

export default function Leaderboard() {
  const { loading, error, leaderboard, getLeaderboardData } = useLeaderboard();

  useEffect(() => {
    getLeaderboardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && leaderboard.length === 0 && (
        <div className={classes.noDataAndError}>
          <Link to="/">
            <Button>Home</Button>
          </Link>
          No data found!
        </div>
      )}
      {error && (
        <div className={classes.noDataAndError}>
          <Link to="/">
            <Button>Home</Button>
          </Link>
          There was an error!
        </div>
      )}

      {!loading && leaderboard.length > 0 && (
        <div className={classes.leaderboard}>
          <div className={classes.header}>
            <h1>
              Football Quiz Leaderboard <span>(Top 7)</span>
            </h1>
            <Link to="/">
              <Button>Home</Button>
            </Link>
          </div>

          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.rank}>Rank</th>
                <th className={classes.name}>Name</th>
                <th className={classes.time}>Time</th>
                <th className={classes.score}>Score</th>
              </tr>
            </thead>

            <tbody>
              {leaderboard.length > 0 &&
                leaderboard.map((obj, index) => {
                  return (
                    <tr key={Math.random()}>
                      <td>{index + 1}</td>
                      <td>{obj.name}</td>
                      <td>{obj.time}s</td>
                      <td>{obj.score}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
