import { TestBed } from '@angular/core/testing';

import { MainbodyService } from './mainbody.service';

describe('MainbodyService', () => {
  let service: MainbodyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainbodyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
