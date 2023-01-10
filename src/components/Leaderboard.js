import classes from "../styles/Leaderboard.module.css";

export default function Leaderboard() {
  return (
    <div className={classes.leaderboard}>
      <h1>Football Quiz Leaderboard</h1>
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
          <tr>
            <td>01</td>
            <td>Hridoy</td>
            <td>45</td>
            <td>35</td>
          </tr>

          <tr>
            <td>02</td>
            <td>Sani</td>
            <td>67</td>
            <td>45</td>
          </tr>

          <tr>
            <td>03</td>
            <td>Shuvo</td>
            <td>12</td>
            <td>54</td>
          </tr>

          <tr>
            <td>04</td>
            <td>Seizure</td>
            <td>67</td>
            <td>88</td>
          </tr>

          <tr>
            <td>05</td>
            <td>Hasan</td>
            <td>67</td>
            <td>34</td>
          </tr>

          <tr>
            <td>06</td>
            <td>Niloy</td>
            <td>34</td>
            <td>33</td>
          </tr>

          <tr>
            <td>07</td>
            <td>Shahriar</td>
            <td>12</td>
            <td>21</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
