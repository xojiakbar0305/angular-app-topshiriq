import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee: string;
  announced: boolean = false; //topshiriq berish uchun
  confirmed: boolean = false; //  tasdiqlash uchun

  task: string = "<Topshiriq yo'q>";

  constructor(private taskService: TaskService) { 
    taskService.taskAnnounced$.subscribe(
      task => {
        this.task = task;
        this.announced = true;
        this.confirmed = false;
      }
    );
  }

  ngOnInit(): void {
  }

  confirm() {
    this.confirmed = true;
    this.taskService.confirmTask(this.employee);
  }

}
