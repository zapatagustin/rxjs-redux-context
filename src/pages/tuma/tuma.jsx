import { useContext } from "react";
import ComponentContext1 from "./components/ComponentContext1";
import ComponentContext2 from "./components/ComponentContext2";
import { ComponentRedux2 } from "./components/ComponentRedux2";
import { TumaProvider } from "./context/TumaContext";

function Tuma() {
  return (
    <div>
      <TumaProvider>
        <ComponentContext1 />
        <ComponentContext2 />
        <ComponentRedux2 />
      </TumaProvider>
    </div>
  );
}

export default Tuma;
