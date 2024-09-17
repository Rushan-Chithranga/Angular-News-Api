import { TestBed } from '@angular/core/testing';

import { TopnewsapiService } from './topnewsapi.service';

describe('TopnewsapiService', () => {
  let service: TopnewsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopnewsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
