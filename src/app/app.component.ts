import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombreEmpresa = 'marketing digital';
  titulo = 'paquetes';
  fecha = new Date();
  precio = 200;
  mes = 'MES';

  // paquete = {
  //   titulo: 'Basico',
  //   Precio: 100,
  //   mes: 'MES',
  //   d1: 'Redes Sociales',
  //   d2: 'Branding',
  //   d3: 'Diseño de imagen',
  //   d4: '-'
  // };

  paquetes = [
    {
      titulo: 'Basico',
      precio: 100,
      mes: 'MES',
      d1: 'Redes Sociales',
      d2: 'Branding',
      d3: 'Diseño de imagen',
      d4: '-',
    },
    {
      titulo: 'Basico',
      precio: 200,
      mes: 'MES',
      d1: 'Redes Sociales',
      d2: 'Branding',
      d3: 'Video',
      d4: 'Diseño de imagen',
    },
    {
      titulo: 'Basico',
      precio: 300,
      mes: 'MES',
      d1: 'Redes Sociales',
      d2: 'Branding',
      d3: 'Imagen/Video',
      d4: 'Community Manager',
    }
  ];
}
