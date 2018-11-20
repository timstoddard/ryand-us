import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TobyComponent } from './toby.component';

describe('TobyComponent', () => {
  let component: TobyComponent;
  let fixture: ComponentFixture<TobyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TobyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TobyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
