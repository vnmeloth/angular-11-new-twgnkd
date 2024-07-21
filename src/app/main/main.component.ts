import { Component, OnInit } from '@angular/core';
import {CustomPipe} from './custom-pipe.pipe';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  users = ['a', 'b'];
  message ="You are not eligible for student pass!";
  constructor() {}

  ngOnInit() {}
}
