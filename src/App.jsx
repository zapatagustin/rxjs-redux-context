import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Component1 } from "./components/rxjs/Component1";
import { Component2 } from "./components/rxjs/Component2";
import Tuma from "./pages/tuma/tuma";
import { TumaStore } from "./redux/store";
import { ComponentRedux1 } from "./components/redux/ComponentRedux1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Provider store={TumaStore}>
        <h1>rxjs</h1>
        <Component1 />
        <Component2 />
        <h2>context</h2>
        <Tuma />
        <h3>redux</h3>
        <ComponentRedux1 />
      </Provider>
    </div>
  );
}

export default App;
