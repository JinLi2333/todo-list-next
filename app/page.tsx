'use client';

import { TodoItemListSection } from '@/components/TodoItemListSection'
import todoStore from '@/components/data/TodoStore'

export default function Home() {
  return (
    <div className=" w-[800px] h-[600px] bg-blue-500">
      <TodoItemListSection className='mx-2 my-2' title="mock" todoStore={todoStore} />
      <TodoItemListSection className='mx-2 my-2' title="fuck" todoStore={todoStore} />
    </div>
  )
}
