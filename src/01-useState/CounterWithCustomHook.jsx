import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr />
      <button className="btn btn-dark" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-dark" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-dark" onClick={() => decrement(3)}>
        -1
      </button>
    </>
  );
};
