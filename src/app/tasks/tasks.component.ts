import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  expandDropdownMenu(id: string, event: Event) {
    const target = event.target as HTMLElement | null;
    if (target) {
      target.classList.toggle('show');
      document.getElementById(id)?.classList.toggle('show');
    }
  }
}
