import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export default class TopbarComponent implements OnInit {

  public title: string = 'Project SE';
  public items: [] = [];

  constructor() { }

  ngOnInit() {
  }

}
