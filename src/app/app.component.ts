import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { OpenTaskComponent } from './open-task/open-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UsersComponent, TasksComponent, OpenTaskComponent, EditUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task_manager';
  selected_user: number = 1;
  edit_user_id!: number;
  editTaskId: number = 1;
  newUser: boolean = false;
  newTask: boolean = false;

  onOpenEditTask(id: number) {
    this.editTaskId = id;
  }

  onSelectUser(id: number) {
    this.selected_user = id;
  }

  onEditUser(id: number) {
    this.edit_user_id = id;
  }

  onNewUser(newUser: boolean) {
    this.newUser = newUser;
  }

  onSetUnassignedActive(setUnassignedActive: boolean) {
    this.selected_user = 0;
  }

  onCreateTask(newTask: boolean) {
    this.newTask = newTask;
  }
}
