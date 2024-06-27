import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, output, ViewChild } from '@angular/core';
import { users_list } from '../users.list';
import { tasks_list } from '../../tasks/tasks.list';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent {
  users_list = users_list;
  tasks_list = tasks_list;
  @Input() edit_user_id!: number;
  @Input() newUser!: boolean;
  setUnassignedActive = output<boolean>();
  // formHeader: string = this.newUser === true ? 'Edit user' : 'Create new user';

  @ViewChild('userNameInput') userNameInput!: ElementRef;
  @ViewChild('userAvatarInput') userAvatarInput!: ElementRef;

  editUser() {
    for (let user of this.users_list) {
      if (user.id === this.edit_user_id) {
        user.name = this.userNameInput.nativeElement.value;
        user.avatar = this.userAvatarInput.nativeElement.value;
      }
    }
  }

  createNewUser() {
    const newUserData = {
      id: this.users_list.length,
      name: this.userNameInput.nativeElement.value,
      avatar: this.userAvatarInput.nativeElement.value,
    };
    this.users_list.push(newUserData);
    console.log(this.users_list);
  }

  deleteUser() {
    let result = confirm('Are you sure you want to delete this user? Their tasks will be added to the unassigned list');
    if (result === true) {
      for (let user of this.users_list) {
        if (user.id === this.edit_user_id) {
          this.users_list.splice(this.users_list.indexOf(user), 1);
        }
      }
      for (let task of this.tasks_list) {
        if (task.assignee_id === this.edit_user_id) {
          task.assignee_id = 0;
        }
      }
      this.setUnassignedActive.emit(true);
    }
  }
}
