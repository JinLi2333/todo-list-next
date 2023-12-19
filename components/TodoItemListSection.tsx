'use client'

import { ArrowRight } from 'lucide-react'
import { TodoItemProps, TodoItem } from './TodoItem'
import { Label } from './ui/label'

interface TodoItemListSectionProps {
  title: string
  items: TodoItemProps[]
}

export default function TodoItemListSection({
  title,
  items,
}: TodoItemListSectionProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <ArrowRight />
        <Label className=" text-red-500">{title}</Label>
      </div>
      <div className=" flex flex-col">
        {items.map((item, index) => (
          <TodoItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
