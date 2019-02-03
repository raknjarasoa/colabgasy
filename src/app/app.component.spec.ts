import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

describe('AppComponent', async () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(async () => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [AppComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }));

  test('should create the app', async () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
