import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
/**
 * @jest-environment node
 */
describe('ApiService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  test('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
    console.log('NJARA');
  });
  test('should be created,,', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
    console.log(service);
  });
});
