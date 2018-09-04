import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mensaje: string;
  correo:string;


  validarLogin() {
    if (this.correo.includes('@')) {
      
    } else {
      
    }
  }
}
