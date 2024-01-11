import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  configView = true;
  homeView = true;
  escalasView = true;
  eventosView = true;
  associadosView = true;
  departamentosView = true;
  usersView = true;

}
