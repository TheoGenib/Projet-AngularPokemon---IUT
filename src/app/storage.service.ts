import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storageSubject = new Subject<string>();

  constructor() {
    this.startPolling();
  }

  private startPolling() {
    setInterval(() => {
      const currentValue = localStorage.getItem('user');
      this.storageSubject.next(currentValue);
    }, 1000); // Interval de rafraîchissement, ajustez selon vos besoins
  }

  public getStorageChanges() {
    return this.storageSubject.asObservable();
  }
}