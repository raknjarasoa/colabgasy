import { TestBed } from '@angular/core/testing';

import { SharedModule } from '../shared.module';
import { CountryService } from './country.service';

/**
 * @jest-environment node
 */
describe('CountryService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [SharedModule]
    })
  );

  test('should be created', async () => {
    const service: CountryService = TestBed.get(CountryService);
    expect(service).toBeTruthy();
  });
});
