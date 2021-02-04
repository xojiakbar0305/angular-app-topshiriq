import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.css'],
  providers: [TaskService]
})
export class ManagmentComponent implements OnInit {

  nextTask = 0;
  tasks = ['Soat 9da yig\'ilish', 'Yaponiyaga ish safari', 'Xisobot topshirilsin!'];
  employees = ['Usmon Said', 'Salim Zohidov', 'Asadullo Qodiriy'];
  history: string[] = [];

  constructor(private taskService: TaskService) { 
    taskService.taskConfirmend$.subscribe(
      employee => {
        this.history.push(`${ employee } tasdiqladi.`);
      }
    );
  }

  ngOnInit(): void {
  }
  announce() {
    let task = this.tasks[this.nextTask++];
    this.taskService.announceTask(task);
    this.history.push(`"${task}" topshirig'i e'lon qilindi.`)

    if (this.nextTask >= this.tasks.length) {
      this.nextTask = 0;
    }
  }

}
