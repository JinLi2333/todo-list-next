import TodoItemListSection from "@/components/TodoItemListSection";
import { Button } from "@/components/ui/button";


const mockTodoItems = [
  { title: "Hello world", completed: false, favorite: false },
  { title: "Hello world", completed: false, favorite: true },
  { title: "Hello world", completed: true, favorite: false },
  { title: "Hello world", completed: true, favorite: true },
];

export default function Home() {
  return (
    <TodoItemListSection title="mock" items={mockTodoItems} />
  )
}
