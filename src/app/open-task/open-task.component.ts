import {
  Component,
  Input,
  output,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { users_list } from '../users/users.list';
import { tasks_list } from '../tasks/tasks.list';
import { statuses_list } from '../tasks/statuses.list';
import { priorities_list } from '../tasks/priorities.list';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-open-task',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './open-task.component.html',
  styleUrl: './open-task.component.css',
})
export class OpenTaskComponent {
  tasks_list = tasks_list;
  users_list = users_list;
  statuses_list = statuses_list;
  priorities_list = priorities_list;
  @Input() newTask!: boolean;
  @Input() openTask!: number;
  openTaskData!: any;
  updateButtonText!: string;

  @ViewChild('taskNameInput') taskNameInput!: ElementRef;
  @ViewChild('taskDescriptionInput') taskDescriptionInput!: ElementRef;
  @ViewChild('taskStatusInput') taskStatusInput!: ElementRef;
  @ViewChild('taskDateCreatedInput') taskDateCreatedInput!: ElementRef;
  @ViewChild('taskDateDeadlineInput') taskDateDeadlineInput!: ElementRef;
  @ViewChild('taskPriorityInput') taskPriorityInput!: ElementRef;
  @ViewChild('taskAssigneeInput') taskAssigneeInput!: ElementRef;

  @ViewChild('openTaskModal') openTaskModal!: ElementRef;

  ngOnInit() {
    console.log(this.newTask);
    this.setOpenTaskData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['newTask'] || changes['openTask']) {
      console.log(this.newTask);
      this.setOpenTaskData();
    }
  }

  setOpenTaskData() {
    this.updateButtonText = this.newTask === true ? 'Create new' : 'Update' ;
    if (this.newTask === true) {
      this.openTaskData = {
        id: this.tasks_list.length + 1,
        title: '',
        description: '',
        status: '',
        date_created: '',
        date_deadline: '',
        priority: 1,
        assignee_id: 0,
      };
    } else {
      for (let task of this.tasks_list) {
        if (task.id === this.openTask) {
          this.openTaskData = {
            id: task.id,
            title: task.title,
            description: task.description,
            status: task.status,
            date_created: task.date_created,
            date_deadline: task.date_deadline,
            priority: task.priority,
            assignee_id: task.assignee_id,
          };
        }
      }
    }
  }

  updateOpenTask() {
    const taskName = this.taskNameInput.nativeElement.value;
    const taskDescription = this.taskDescriptionInput.nativeElement.value;
    const taskStatus = this.taskStatusInput.nativeElement.value;
    const taskDateCreated = this.taskDateCreatedInput.nativeElement.value;
    const taskDateDeadline = this.taskDateDeadlineInput.nativeElement.value;
    const taskPriority = this.taskPriorityInput.nativeElement.value;
    const taskAssignee = this.taskAssigneeInput.nativeElement.value;

    if (this.newTask === false) {
      for (let task of this.tasks_list) {
        if (task.id === this.openTask) {
          task.title = taskName;
          task.description = taskDescription;
          task.status = taskStatus;
          task.date_created = taskDateCreated;
          task.date_deadline = taskDateDeadline;
          task.priority = taskPriority;
          task.assignee_id = taskAssignee;
        }
      }
    } else {
      this.tasks_list.push({
        id: this.tasks_list.length + 1,
        title: taskName,
        description: taskDescription,
        status: taskStatus,
        date_created: taskDateCreated,
        date_deadline: taskDateDeadline,
        priority: taskPriority,
        assignee_id: taskAssignee,
      });
      this.newTask = false;
    }
  }

  deleteOpenTask() {
    let result = confirm('Are you sure you want to delete this task?');
    if (result === true) {
      for (let task of this.tasks_list) {
        if (task.id === this.openTask) {
          this.tasks_list.splice(this.tasks_list.indexOf(task), 1);
        }
      }
    }
  }
}
