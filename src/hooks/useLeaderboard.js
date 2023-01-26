import { get, getDatabase, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

export default function useLeaderboard(lb) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);

  const db = getDatabase();
  const leaderboardRef = ref(db, lb);

  useEffect(() => {
    async function getLeaderboardData() {
      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(leaderboardRef);
        setLoading(false);
        if (snapshot.exists()) {
          setLeaderboard(snapshot.val().scores);
        } else {
          console.log("There is no data found!");
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    getLeaderboardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function setLeaderboardData(scores) {
    await set(leaderboardRef, { scores });
  }

  return {
    loading,
    error,
    leaderboard,
    setLeaderboardData,
  };
}
