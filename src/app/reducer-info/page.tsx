"use client";

import { useInputs } from "./use-inputs";

export default function Page() {
  const [state, onChange] = useInputs({ name: "", nickname: "" });

  const { name, nickname } = state;

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
