import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcontrolExerciseComponent } from './formcontrol-exercise.component';

describe('FormcontrolExerciseComponent', () => {
  let component: FormcontrolExerciseComponent;
  let fixture: ComponentFixture<FormcontrolExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcontrolExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcontrolExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
