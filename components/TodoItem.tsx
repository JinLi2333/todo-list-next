'use client'

import { Label } from '@radix-ui/react-label'
import { Checkbox } from './ui/checkbox'
import { cn } from '@/lib/utils'
import process from 'process'
import { observer } from 'mobx-react-lite'
import { ItemStore } from './data/ItemStore'

export interface TodoItemProps {
  id: number
  title: string
  completed: boolean
  favorite: boolean
}

export const TodoItem = observer(
  ({ itemStore, className }: { itemStore: ItemStore; className?: string }) => {
    function ff() {
      console.log(process.env['NEXT_PUBLIC_GPT_KEY'])
    }

    return (
      <div className={cn('flex flex-row items-center', className)} onClick={ff}>
        <Checkbox
          id="terms"
          className="mx-4 my-2"
          checked={itemStore.completed}
          onCheckedChange={() => {
            itemStore.setCompleted(!itemStore.completed)
          }}
        />
        <Label
          htmlFor="terms"
          className={cn(
            'my-2 flex-grow',
            itemStore.completed ? 'line-through' : '',
          )}
        >
          {itemStore.title}
        </Label>
        <Checkbox className="mx-4 my-2" checked={itemStore.favorite} />
      </div>
    )
  },
)
