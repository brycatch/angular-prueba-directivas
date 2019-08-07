import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {
  class = 'alert-danger';
  propiedades = {
    danger: true
  };
  loading = false;

  constructor() { }

  ngOnInit() {
  }

  guardar() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
