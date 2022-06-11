import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'List Articles',
        icon: 'pi pi-fw pi-bars',
        routerLink: ['/articles'] 
      },
      {
        label: 'Add Article',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['/add-article'],
        visible: this.isAuthenticated
      },
      {
        label: 'Terms',
        icon: 'pi pi-fw pi-list',
        routerLink: ['/terms']
      },
      {
        label: 'Login',
        icon: 'pi pi-fw pi-sign-in',
        routerLink: ['/login'],
        visible: !this.isAuthenticated
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out',
        visible: this.isAuthenticated
      }
    ];
  }
}
