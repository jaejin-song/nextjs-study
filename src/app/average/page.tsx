"use client";

import { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers: number[]) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
};

export default function Page() {
  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef<HTMLInputElement | null>(null);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  }, []);
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current?.focus();
  }, [list, number]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>평균값: {avg}</div>
    </div>
  );
}
