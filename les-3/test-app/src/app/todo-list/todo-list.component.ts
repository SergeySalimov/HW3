import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tasks: string[] = [];
  currentTask = '';
  doneTasks: string[] = [];
  delItem: string[];

  constructor() { }

  ngOnInit(): void {
  }

  public onAdd() {
    this.tasks.push(this.currentTask);
    this.currentTask = '';
  }

  public onRemove(i): string[] {
    let removed: string[];
    removed = this.tasks.splice(i, 1);
    return removed;
  }

  public onDone(i) {
    this.doneTasks = [...this.doneTasks, ...this.onRemove(i)];

  }
}
