import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CountryListComponent } from './country-list/country-list.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';

@NgModule({
  imports: [CommonModule, SharedModule, LandingRoutingModule],
  declarations: [LandingComponent, CountryListComponent]
})
export class LandingModule {}
