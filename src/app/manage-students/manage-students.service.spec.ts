import { TestBed, inject } from '@angular/core/testing';

import { ManageStudentsService } from './manage-students.service';

describe('ManageStudentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageStudentsService]
    });
  });

  it('should be created', inject([ManageStudentsService], (service: ManageStudentsService) => {
    expect(service).toBeTruthy();
  }));
});
