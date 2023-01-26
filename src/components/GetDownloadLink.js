import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useState } from "react";

export default function GetDownloadLink() {
  const [error, setError] = useState(false);
  const [link, setLink] = useState("");
  const [imgLink, setimgLink] = useState("");

  async function getlink() {
    const storage = getStorage();

    const storageRef = ref(storage, imgLink);

    // getDownloadURL(storageRef).then((url) => {
    //   setLink(url);
    // });

    try {
      setError(false);
      const value = await getDownloadURL(storageRef);
      setLink(value);
    } catch (err) {
      console.log(err);
      setError("There is an Error");
    }
  }

  return (
    <>
      {error && <h1>{error}</h1>}
      <h1>{link}</h1>
      <textarea value={imgLink} onChange={(e) => setimgLink(e.target.value)} />
      <button onClick={getlink}>Click</button>
    </>
  );
}
