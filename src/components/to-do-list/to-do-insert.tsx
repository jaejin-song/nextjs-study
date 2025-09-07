"use client";

import React, { FormEventHandler, useCallback, useState } from "react";

function ToDoInsertComponent({
  onInsert,
}: {
  onInsert: (text: string) => void;
}) {
  const [value, setValue] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      // submit 이벤트로 인한 새로고침 방지
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="flex bg-[#495057]" onSubmit={onSubmit}>
      <input
        className="grow outline-hidden border-none p-[0.5rem] text-[1.125rem]"
        type="text"
        value={value}
        onChange={onChange}
      />
      <button
        className="outline-hidden border-none bg-[#868e96] px-[1rem] flex items-center cursor-pointer"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export const ToDoInsert = React.memo(ToDoInsertComponent);
