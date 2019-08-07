import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p [appResaltado]="'orange'">
      Párrafo
    </p>
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-clases></app-clases>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
