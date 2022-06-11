import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@authentication/services/authentication.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;
  menuItems: MenuItem[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.authenticationService.getIsAuthenticatedEmitter().subscribe((isAuthenticated: boolean) => this.updateMenu(false, isAuthenticated))
  }

  ngOnInit(): void {
    this.updateMenu();
  }

  updateMenu(isOnInitStage = true, isAuthenticated = false): void {
    this.isAuthenticated = isOnInitStage ? this.authenticationService.isAuthenticated() : isAuthenticated;

    this.menuItems = [
      {
        label: 'List Articles',
        icon: 'pi pi-fw pi-bars',
        routerLink: ['/articles'] 
      },
      {
        label: 'Add Article',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['/articles/add'],
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
        visible: this.isAuthenticated,
        command: (event: Event) => {
          this.logout()
        }
      }
    ];
  }

  logout(): void {
    this.authenticationService.logout().subscribe(
      {
        next: () => {
          this.router.navigate(['/login'])
        },
        error: () => {}
      }
    )
  }
}
