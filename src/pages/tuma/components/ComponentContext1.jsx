import { useTumaContext } from "../context/TumaContext";

function ComponentContext1() {
  const { setTumaContextValue } = useTumaContext();

  const handleClick = () => {
    setTumaContextValue("nananana batmaaan");
  };

  return (
    <div>
      <button onClick={handleClick}>send information</button>
    </div>
  );
}

export default ComponentContext1;
