import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBreadcrumbComponent } from './mat-breadcrumb.component';

describe('MatBreadcrumbComponent', () => {
  let component: MatBreadcrumbComponent;
  let fixture: ComponentFixture<MatBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
