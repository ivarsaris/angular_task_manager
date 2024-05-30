import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
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
  selected_user: number = 1;

  selectUser(id: number) {
    this.selected_user = id;
  }
}
