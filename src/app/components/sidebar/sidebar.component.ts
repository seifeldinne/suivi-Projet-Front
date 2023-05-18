import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Profile',  icon:'person', class: '' },
    { path: '/icons', title: 'Demande de Deploiement',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Suivi des recettes',  icon:'location_on', class: '' },
    { path: '/table-list', title: 'Gestion des Projets',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Gestion des Domaines',  icon:'library_books', class: '' },
    { path: '/notifications', title: 'Calendrier',  icon:'notifications', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
