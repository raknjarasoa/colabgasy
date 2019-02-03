import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'cg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authentication: AuthenticationService) {}

  login(username: string, password: string) {
    this.authentication.login(username, password);
  }
}
