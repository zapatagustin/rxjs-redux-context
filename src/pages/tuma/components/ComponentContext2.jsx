import { useTumaContext } from "../context/TumaContext";

function ComponentContext2() {
  const { TumaContextValue } = useTumaContext();

  return <div>Value: {TumaContextValue}</div>;
}

export default ComponentContext2;
