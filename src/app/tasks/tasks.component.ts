import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { tasks_list } from './tasks.list';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks_list = tasks_list;

  expandDropdownMenu(id: string, event: Event) {
    const target = event.target as HTMLElement | null;
    if (target) {
      target.classList.toggle('show');
      document.getElementById(id)?.classList.toggle('show');
    }
  }
}
