import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;

  constructor() { }

  ngOnInit(): void {
    // You can initialize the task property here if needed
  }
}
