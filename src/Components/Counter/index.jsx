import { CounterCountainer } from "../../Styles/ComponentsStyle/Counter";

export const Counter = ({ counter, setCounter }) => {
  const handleCounterAdd = () => {
    setCounter(counter + 1);
  };

  const handleCounterSub = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const counterValue = (e) => {
    setCounter(parseInt(e));
  };

  return (
    <CounterCountainer>
      <input
        type="number"
        value={counter}
        onChange={(e) => counterValue(e.target.value)}
      />
      <div className="buttonContainer">
        <button className="top" onClick={handleCounterAdd}>
          +
        </button>
        <button className="bot" onClick={handleCounterSub}>
          -
        </button>
      </div>
    </CounterCountainer>
  );
};
