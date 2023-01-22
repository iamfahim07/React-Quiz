import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestionsAndAnswers() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const db = getDatabase();
      const dataRef = ref(db, "footballQuiz");
      const dataQuery = query(dataRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(dataQuery);
        setLoading(false);
        setData((prev) => {
          return [...prev, ...Object.values(snapshot.val())];
        });
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchData();
  }, []);

  return {
    loading,
    error,
    data,
  };
}
