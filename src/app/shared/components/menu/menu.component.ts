import { Component, OnInit } from '@angular/core';

interface MenuItem {
  rota: string;
  nome: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItem: MenuItem[] = [
    {
      nome: 'FullScreen',
      rota: 'mapas/fullscreen'
    },
    {
      nome: 'Propriedades',
      rota: 'mapas/props'
    },
    {
      nome: 'Zoom',
      rota: 'mapas/zoom-range'
    },
    {
      nome: 'Marcadores',
      rota: 'mapas/marcadores'
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
