"use client";

import { useCallback, useReducer, useRef, useState } from "react";
import { ToDoList } from "@/components/to-do-list/to-do-list";
import { ToDoInsert } from "@/components/to-do-list/to-do-insert";
import React from "react";

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

const createBulkTodos = (): ToDo[] => {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `Todo ${i}`,
      checked: false,
    });
  }
  return array;
};

type Action =
  | {
      type: "INSERT";
      todo: ToDo;
    }
  | {
      type: "REMOVE";
      id: number;
    }
  | {
      type: "TOGGLE";
      id: number;
    };

const todoReducer = (todos: ToDo[], action: Action) => {
  switch (action.type) {
    case "INSERT":
      return todos.concat(action.todo);
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
};

export function Page() {
  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(3);

  const onInsert = useCallback((text: string) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // setTodos((todos) => todos.concat(todo));
    dispatch({ type: "INSERT", todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id: number) => {
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));
    dispatch({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback((id: number) => {
    // setTodos((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
    //   )
    // );
    dispatch({ type: "TOGGLE", id });
  }, []);

  return (
    <div className="w-[512px] mx-auto mt-[6rem] rounded-sm overflow-hidden">
      <div className="h-[4rem] flex items-center justify-center bg-[#194763]">
        일정 관리
      </div>
      <div className="bg-[#1b1b1b]">
        <ToDoInsert onInsert={onInsert} />
        <ToDoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </div>
    </div>
  );
}

export default React.memo(Page);
