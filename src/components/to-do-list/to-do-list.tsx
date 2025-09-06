import { ToDo } from "@/app/to-do-list/page";
import { ToDoItem } from "./to-do-item";

export function ToDoList({
  todos,
  onRemove,
  onToggle,
}: {
  todos: ToDo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}) {
  return (
    <div className="flex flex-col">
      {todos.map((todo) => (
        <ToDoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
