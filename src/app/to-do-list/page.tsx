"use client";

import { useCallback, useRef, useState } from "react";
import { ToDoList } from "@/components/to-do-list/to-do-list";
import { ToDoInsert } from "@/components/to-do-list/to-do-insert";

export interface ToDo {
  id: number;
  text: string;
  checked: boolean;
}

const defaultTodos: ToDo[] = [
  {
    id: 1,
    text: "Todo 1",
    checked: false,
  },
  {
    id: 2,
    text: "Todo 2",
    checked: true,
  },
];

export default function Page() {
  const [todos, setTodos] = useState(defaultTodos);
  const nextId = useRef(3);

  const onInsert = useCallback(
    (text: string) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id: number) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <div className="border flex flex-col m-12 p-4">
      <ToDoInsert onInsert={onInsert} />
      <ToDoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
}
