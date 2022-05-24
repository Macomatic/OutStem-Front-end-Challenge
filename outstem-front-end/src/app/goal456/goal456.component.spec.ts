import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goal456Component } from './goal456.component';

describe('Goal456Component', () => {
  let component: Goal456Component;
  let fixture: ComponentFixture<Goal456Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Goal456Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Goal456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
