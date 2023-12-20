import { makeAutoObservable } from "mobx";
import { ItemStore } from "./ItemStore";

export class TodoStore {
  items: ItemStore[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodos = (items: ItemStore[]) => {
    this.items.push(...items);
  }

  addTodo = (item: ItemStore) => {
    this.items.push(item);
  };

  removeTodo = (id: number) => {
    this.items = this.items.filter((item) => item.id !== id);
  };
}

const todoStore = new TodoStore();

const mockTodoItems = [
  new ItemStore(1, 'Hello world', false, false),
  new ItemStore(2, 'Hello world', false, true),
  new ItemStore(3, 'Hello world', true, false),
  new ItemStore(4, 'Hello world', true, true),
]

todoStore.addTodos(mockTodoItems);

export default todoStore;
