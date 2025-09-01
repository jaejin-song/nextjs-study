"use client";

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

export default function Page() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChange}
        />
      </div>
      <div>
        <div>
          <p>name: {name}</p>
        </div>
        <div>
          <p>nickname: {nickname}</p>
        </div>
      </div>
    </div>
  );
}
