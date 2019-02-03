import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { AuthenticationGuard } from './guard/authentication.guard';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  imports: [CommonModule, SharedModule, CoreRoutingModule],
  declarations: [LoginComponent, HeaderComponent, NotFoundComponent],
  exports: [RouterModule, HeaderComponent],
  providers: [AuthenticationService, AuthenticationGuard]
})
export class CoreModule {}
