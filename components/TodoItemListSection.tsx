'use client'

import { ArrowRight, ArrowDown } from 'lucide-react'
import { TodoItemProps, TodoItem } from './TodoItem'
import { Label } from './ui/label'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export interface TodoItemListSectionProps {
  title: string
  items: TodoItemProps[]
}

export function TodoItemListSection({
  title,
  items,
  className,
}: TodoItemListSectionProps & { className?: string }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={cn("flex flex-col justify-start", className)} >
      <div
        className="flex flex-row items-center min-w-fit max-w-fit mb-2 px-1 bg-slate-300 rounded-sm"
        onClick={() => {
          setCollapsed(!collapsed)
        }}
      >
        {collapsed ? <ArrowRight /> : <ArrowDown />}
        <Label className='mx-1'>{`${title} ${items.length}`}</Label>
      </div>
      {!collapsed && (
        <div className="flex flex-col">
          {items.map((item, index) => (
            <TodoItem key={index} {...item} className='bg-white mb-1 rounded-md' />
          ))}
        </div>
      )}
    </div>
  )
}
