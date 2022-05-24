import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goal123Component } from './goal123.component';

describe('Goal123Component', () => {
  let component: Goal123Component;
  let fixture: ComponentFixture<Goal123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Goal123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Goal123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
