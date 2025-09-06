import { FormEventHandler, useCallback, useState } from "react";

export function ToDoInsert({ onInsert }: { onInsert: (text: string) => void }) {
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
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button className="ml-4 border p-2" type="submit">
        Add
      </button>
    </form>
  );
}
