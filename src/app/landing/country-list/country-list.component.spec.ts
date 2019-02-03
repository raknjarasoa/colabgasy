import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListComponent } from './country-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('CountryListComponent', () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CountryListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create CountryListComponent', async () => {
    expect(component).toBeTruthy();
  });
});
