"use client";

import { useReducer } from "react";

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

interface State {
  value: number;
}

interface Action {
  type: string;
}

export default function Page() {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>Current count: {state.value}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
}
