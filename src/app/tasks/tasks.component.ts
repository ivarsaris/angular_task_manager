import { NgFor, NgIf } from '@angular/common';
import { Component, Input, output } from '@angular/core';
import { tasks_list } from './tasks.list';
import { statuses_list } from './statuses.list';
import { users_list } from '../users/users.list';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks_list = tasks_list;
  statuses_list = statuses_list;
  users_list = users_list;
  @Input() selected_user!: number;
  editTaskId = output<number>();

  openEditTask(id: number) {
      this.editTaskId.emit(id);
  }

  expandDropdownMenu(id: string, event: Event) {
    const target = event.target as HTMLElement | null;
    if (target) {
      target.classList.toggle('show');
      document.getElementById(id)?.classList.toggle('show');
    }
  }

  updateStatus(id: number, status: string) {
    for (const task of this.tasks_list) {
      if (task.id == id) {
        task.status = status;
      }
    }
  }

  updateAssignee(task_id: number, user_id: number) {
    for (const task of this.tasks_list) {
      if (task.id == task_id) {
        task.assignee_id = user_id;
      }
    }
  }
}
