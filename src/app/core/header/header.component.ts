import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'cg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly title = 'Colabgasy';

  constructor(private authentication: AuthenticationService) {}

  logout() {
    this.authentication.logout();
  }
}
