import { TestBed } from '@angular/core/testing';

import { Glasses } from './glasses';

describe('Glasses', () => {
  let service: Glasses;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Glasses);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
