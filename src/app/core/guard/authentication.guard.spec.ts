import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticationService } from '../services/authentication.service';
import { AuthenticationGuard } from './authentication.guard';

describe('AuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthenticationGuard, AuthenticationService]
    });
  });

  test('should ...', inject(
    [AuthenticationGuard],
    (guard: AuthenticationGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
