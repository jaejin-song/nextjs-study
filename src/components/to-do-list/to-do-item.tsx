import { ToDo } from "@/app/to-do-list/page";

export function ToDoItem({
  todo,
  onRemove,
  onToggle,
}: {
  todo: ToDo;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}) {
  const { id, text, checked } = todo;

  return (
    <div className="flex px-2">
      <div className="flex" onClick={() => onToggle(id)}>
        <input className="border" type="checkbox" checked={checked} readOnly />
        <div>{text}</div>
      </div>
      <div className="ml-5" onClick={() => onRemove(id)}>
        Delete
      </div>
    </div>
  );
}
