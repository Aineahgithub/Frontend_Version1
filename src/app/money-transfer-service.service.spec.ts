import { TestBed } from '@angular/core/testing';

import { MoneyTransferServiceService } from './money-transfer-service.service';

describe('MoneyTransferServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoneyTransferServiceService = TestBed.get(MoneyTransferServiceService);
    expect(service).toBeTruthy();
  });
});
