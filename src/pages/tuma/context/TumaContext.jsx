import { createContext, useContext, useState } from "react";

export const TumaContext = createContext();

export const TumaProvider = ({ children }) => {
  const [TumaContextValue, setTumaContextValue] = useState("");

  return (
    <TumaContext.Provider value={{ TumaContextValue, setTumaContextValue }}>
      {children}
    </TumaContext.Provider>
  );
};

export const useTumaContext = () => {
  const context = useContext(TumaContext);
  if (context === undefined) {
    throw new Error("useTumaContext must be used with tumaProvider");
  }
  return context;
};
