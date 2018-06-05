import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideleftComponent } from './asideleft.component';

describe('AsideleftComponent', () => {
  let component: AsideleftComponent;
  let fixture: ComponentFixture<AsideleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
