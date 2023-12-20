'use client'

import { ArrowRight, ArrowDown } from 'lucide-react'
import { TodoItemProps, TodoItem } from './TodoItem'
import { Label } from './ui/label'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { observer } from 'mobx-react-lite'
import { TodoStore } from './data/TodoStore'

export interface TodoItemListSectionProps {
  title: string
  items: TodoItemProps[]
}

export const TodoItemListSection = observer(
  ({
    title,
    todoStore,
    className,
  }: {
    title: string
    todoStore: TodoStore
    className?: string
  }) => {
    const [collapsed, setCollapsed] = useState(false)

    return (
      <div className={cn('flex flex-col justify-start', className)}>
        <div
          className="flex flex-row items-center min-w-fit max-w-fit mb-2 px-1 bg-slate-300 rounded-sm"
          onClick={() => {
            setCollapsed(!collapsed)
          }}
        >
          {collapsed ? <ArrowRight /> : <ArrowDown />}
          <Label className="mx-1">{`${title} ${todoStore.items.length}`}</Label>
        </div>
        {!collapsed && (
          <div className="flex flex-col">
            {todoStore.items.map((item, index) => (
              <TodoItem
                key={index}
                itemStore={item}
                className="bg-white mb-1 rounded-md"
              />
            ))}
          </div>
        )}
      </div>
    )
  },
)
