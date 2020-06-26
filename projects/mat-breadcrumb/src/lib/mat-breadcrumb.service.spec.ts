import { TestBed } from '@angular/core/testing';

import { MatBreadcrumbService } from './mat-breadcrumb.service';

describe('MatBreadcrumbService', () => {
  let service: MatBreadcrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatBreadcrumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
