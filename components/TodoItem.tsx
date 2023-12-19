'use client'

import { Label } from '@radix-ui/react-label'
import { Checkbox } from './ui/checkbox'

export interface TodoItemProps {
  title: string
  completed: boolean
  favorite: boolean
}

export function TodoItem({ title, completed, favorite }: TodoItemProps) {
  return (
    <div className="flex flex-row">
      <Checkbox checked={completed} />
      <Label>{title}</Label>
      <Checkbox checked={favorite} />
    </div>
  )
}
