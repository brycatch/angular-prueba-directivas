import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p  [style.fontSize.px]="size">
      "Etiqueta"
    </p>
    <button class="btn btn-primary" (click)="size = size + 5">
      Más
    </button>
    &nbsp;&nbsp;
    <button class="btn btn-primary" (click)="size = size - 5">
      Menos
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  size = 40;

  constructor() { }

  ngOnInit() {
  }

}
