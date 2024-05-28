import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { users_list } from './users.list';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users_list = users_list;
}
