import { TodoItemListSection } from '@/components/TodoItemListSection'
import { Button } from '@/components/ui/button'

const mockTodoItems = [
  { title: 'Hello world', completed: false, favorite: false },
  { title: 'Hello world', completed: false, favorite: true },
  { title: 'Hello world', completed: true, favorite: false },
  { title: 'Hello world', completed: true, favorite: true },
]

export default function Home() {
  return (
    <div className=" w-[800px] h-[600px] bg-blue-500">
      <TodoItemListSection className='mx-2 my-2' title="mock" items={mockTodoItems} />
      <TodoItemListSection className='mx-2 my-2' title="fuck" items={mockTodoItems} />
    </div>
  )
}
