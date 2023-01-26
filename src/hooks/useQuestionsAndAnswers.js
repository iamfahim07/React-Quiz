import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestionsAndAnswers(quiz) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const db = getDatabase();
      const dataRef = ref(db, quiz);
      const dataQuery = query(dataRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(dataQuery);
        setLoading(false);
        setData((prev) => {
          return [...prev, ...Object.values(snapshot.val().data)];
        });
        setImg((prev) => {
          return [...prev, ...Object.values(snapshot.val().imgLink)];
        });
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    error,
    data,
    img,
  };
}
