import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', async () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, SharedModule],
      declarations: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }));

  test('should create the app', async () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  test(`should have as title 'colabgasy'`, async () => {
    const app: AppComponent = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('colabgasy');
  });

  test('should render title in a h1 tag', async () => {
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to colabgasy!'
    );
  });
});
