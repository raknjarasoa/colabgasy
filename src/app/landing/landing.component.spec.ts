import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../shared/shared.module';
import { CountryListComponent } from './country-list/country-list.component';
import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CountryListComponent, LandingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create LandingComponent', async () => {
    expect(component).toBeTruthy();
  });
});
