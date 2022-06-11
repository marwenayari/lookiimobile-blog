import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@authentication/services/authentication.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(
    private messageService: MessageService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  login(): void {
    this.authenticationService.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(["/"])
      },
      error: () => {
        this.messageService.add({severity:'error', summary:'Error', detail:'Authentication Failed'});
      }
    })
  }
}
