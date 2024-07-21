import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  person = {
    firstName: '',
    LastName: '',
    email: '',
    age : 1
  };
  constructor() { }

  ngOnInit() {
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
     
    console.log('just before subscribe');
    observable.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('just after subscribe');

    const sub = observable.subscribe({
      next(x) {
        console.log('gg value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('just after subscribe');
    sub.unsubscribe();
  }
  

  
  onSubmit(personForm : NgForm) {
    console.log(personForm.value);
    
  }
}