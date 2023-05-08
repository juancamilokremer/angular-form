import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgroupExerciseComponent } from './formgroup-exercise.component';

describe('FormgroupExerciseComponent', () => {
  let component: FormgroupExerciseComponent;
  let fixture: ComponentFixture<FormgroupExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormgroupExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormgroupExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
