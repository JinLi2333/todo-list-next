import { makeAutoObservable } from "mobx";

export class ItemStore {
  id: number = 0;
  title: string = 'fuck me';
  completed: boolean = false;
  favorite: boolean = false;

  constructor(id: number, title: string, completed: boolean, favorite: boolean) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.favorite = favorite;
    makeAutoObservable(this);
  }

  setTitle = (title: string) => {
    this.title = title;
  }

  setCompleted = (completed: boolean) => {
    this.completed = completed;
  }

  setFavorite = (favorite: boolean) => {
    this.favorite = favorite;
  }
}
