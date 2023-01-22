import React, { useContext, useState } from "react";

const NameContext = React.createContext();

export function useName() {
  return useContext(NameContext);
}

export function NameProvider({ children }) {
  const [playerName, setPlayerName] = useState("");

  function nameContainer(name) {
    return setPlayerName(name);
  }

  const nameDispenser = playerName.length > 0 ? playerName : "";

  const value = {
    nameContainer,
    nameDispenser,
  };

  return <NameContext.Provider value={value}>{children}</NameContext.Provider>;
}
