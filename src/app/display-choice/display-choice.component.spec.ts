import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayChoiceComponent } from './display-choice.component';

describe('DisplayChoiceComponent', () => {
  let component: DisplayChoiceComponent;
  let fixture: ComponentFixture<DisplayChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
