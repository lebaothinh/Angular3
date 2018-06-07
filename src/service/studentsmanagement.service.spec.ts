import { TestBed, inject } from '@angular/core/testing';

import { StudentsmanagementService } from './studentsmanagement.service';

describe('StudentsmanagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsmanagementService]
    });
  });

  it('should be created', inject([StudentsmanagementService], (service: StudentsmanagementService) => {
    expect(service).toBeTruthy();
  }));
});
