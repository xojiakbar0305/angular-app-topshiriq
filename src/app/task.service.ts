import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskAnnouncedSource = new Subject<string>();
  private taskConfirmendSource = new Subject<string>();

  public taskAnnounced$ = this.taskAnnouncedSource.asObservable();
  public taskConfirmend$ = this.taskConfirmendSource.asObservable();

  constructor() { }

  announceTask(task: string) {
    this.taskAnnouncedSource.next(task);
  }
  confirmTask(employee: string) {
    this.taskConfirmendSource.next(employee);
  }
}
