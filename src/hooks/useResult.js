import { useState } from "react";

export default function useResult() {
  const [point, setPoint] = useState("lol");

  async function setResult(playerScore) {
    return await setPoint(playerScore);
  }
  console.log(point);
  return {
    point,
    setResult,
  };
}
