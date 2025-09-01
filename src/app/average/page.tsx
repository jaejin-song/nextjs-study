"use client";

import { useMemo, useState } from "react";

const getAverage = (numbers: number[]) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
};

export default function Page() {
  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };
  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" value={number} onChange={onChange} />
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
