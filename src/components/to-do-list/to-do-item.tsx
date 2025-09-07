"use client";

import { ToDo } from "@/app/to-do-list/page";
import React from "react";

function ToDoItem({
  todo,
  onRemove,
  onToggle,
  style,
}: {
  todo: ToDo;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
  style: React.CSSProperties;
}) {
  const { id, text, checked } = todo;

  return (
    <div
      className="border-t border-[#555555] first:border-0 even:bg-[#2c2c2c]"
      style={style}
    >
      <div className="flex p-[1rem] items-center">
        <div
          className="flex grow items-center cursor-pointer"
          onClick={() => onToggle(id)}
        >
          <input
            className="border"
            type="checkbox"
            checked={checked}
            readOnly
          />
          <div className="grow">{text}</div>
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => onRemove(id)}
        >
          Delete
        </div>
      </div>
    </div>
  );
}

export default React.memo(ToDoItem);
