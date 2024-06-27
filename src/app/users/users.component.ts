import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, output } from '@angular/core';
import { users_list } from './users.list';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users_list = users_list;
  @Input() selected_user!: number;
  select = output<number>();
  editUserId = output<number>();
  newUser = output<boolean>();

  selectUser(id: number) {
    this.select.emit(id);
  }

  editUser(id: number) {
    this.editUserId.emit(id);
    this.newUser.emit(false);
  }

  createUser() {
    this.newUser.emit(true);
  }
}
