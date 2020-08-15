import { Component, OnInit } from '@angular/core';

import { practices } from '../practices'

@Component({
  selector: 'app-practice-list',
  templateUrl: './practice-list.component.html',
  styleUrls: ['./practice-list.component.css']
})
export class PracticeListComponent implements OnInit {
  practices = practices;

  constructor() { }

  ngOnInit(): void {
  }

}
