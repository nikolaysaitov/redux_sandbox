import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  console.log(cash);

  const addCash = (cash) => {
    dispatch({ type: "add_cash", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "get_cash", payload: cash });
  };

  return (
    <div className="App">
      <div style={{ fontSize: "2rem" }}>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
      </div>
    </div>
  );
}

export default App;
