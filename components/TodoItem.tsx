'use client'

import { Label } from '@radix-ui/react-label'
import { Checkbox } from './ui/checkbox'
import { cn } from '@/lib/utils'
import process from 'process'

export interface TodoItemProps {
  title: string
  completed: boolean
  favorite: boolean
}

export function TodoItem({ title, completed, favorite, className }: TodoItemProps & { className?: string }) {
  function ff() {
    alert(process.env.GPT_KEY);
  }

  return (
    <div className={cn("flex flex-row items-center", className)} onClick={() => {
      ff()
    }}>
      <Checkbox id='terms' className='mx-4 my-2' checked={completed} />
      <Label htmlFor="terms" className={cn('my-2 flex-grow', completed ? 'line-through' : '')}>{title}</Label>
      <Checkbox className='mx-4 my-2'  checked={favorite} />
    </div>
  ) 
}
