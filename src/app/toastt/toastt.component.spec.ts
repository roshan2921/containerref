import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasttComponent } from './toastt.component';

describe('ToasttComponent', () => {
  let component: ToasttComponent;
  let fixture: ComponentFixture<ToasttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToasttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
