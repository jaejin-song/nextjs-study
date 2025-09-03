import { useReducer } from "react";

interface State {
  name: string;
  nickname: string;
}

const reducer = (
  state: State,
  action: React.ChangeEvent<HTMLInputElement>["target"]
) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

export function useInputs(
  initialForm: State
): [State, (e: React.ChangeEvent<HTMLInputElement>) => void] {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  return [state, onChange];
}
