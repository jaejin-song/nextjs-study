"use client";

import { ToDo } from "@/app/to-do-list/page";
import ToDoItem from "./to-do-item";
import { CSSProperties, useCallback, useEffect, useState } from "react";
import { List } from "react-virtualized";
import React from "react";

function ToDoListComponent({
  todos,
  onRemove,
  onToggle,
}: {
  todos: ToDo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const rowRenderer = useCallback(
    ({
      index,
      key,
      style,
    }: {
      index: number;
      key: string;
      style: React.CSSProperties;
    }) => {
      const todo = todos[index];

      return (
        <ToDoItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [todos, onRemove, onToggle]
  );

  if (!isMounted) {
    return (
      <div className="min-h-[320px] max-h-[513px] overflow-y-auto bg-[#1b1b1b]">
        <div className="flex items-center justify-center h-[320px] text-gray-500">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <List
      className="min-h-[320px] max-h-[513px] overflow-y-auto"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: "none" }}
    />
  );
}

export const ToDoList = React.memo(ToDoListComponent);
