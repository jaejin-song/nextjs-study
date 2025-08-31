"use client";

import { useState } from "react";

export default function Page() {
  const [checked, setChecked] = useState(true);

  const onClick = () => {
    console.log("!checked :>> ", !checked);
    setChecked(!checked);
  };

  return (
    <div className="p-5">
      <div className="border p-5" onClick={onClick}>
        <input
          type="checkbox"
          id="test"
          checked={checked}
          readOnly
          className="pointer-events-none"
        />
        <div className="flex items-center justify-items-center p-5">card</div>
      </div>
    </div>
  );
}
