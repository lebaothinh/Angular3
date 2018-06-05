import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMarkComponent } from './manage-mark.component';

describe('ManageMarkComponent', () => {
  let component: ManageMarkComponent;
  let fixture: ComponentFixture<ManageMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
