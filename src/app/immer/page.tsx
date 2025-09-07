"use client";

import { ChangeEvent, useCallback, useRef, useState } from "react";
import { produce } from "immer";

interface Form {
  name: string;
  username: string;
}

interface UserData extends Form {
  id: number;
}

export default function Page() {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState<{ array: UserData[]; uselessValue: null }>({
    array: [],
    uselessValue: null,
  });

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm(
      produce((draft) => {
        draft[name as keyof typeof form] = value;
      })
    );
  }, []);

  const onSubmit = useCallback(
    (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      setData(
        produce((draft) => {
          draft.array.push(info);
        })
      );

      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  const onRemove = useCallback((id: number) => {
    //   setData({
    //     ...data,
    //     array: data.array.filter((info) => info.id !== id),
    //   });
    setData(
      produce((draft) => {
        draft.array.splice(
          draft.array.findIndex((info) => info.id === id),
          1
        );
      })
    );
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} {info.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
