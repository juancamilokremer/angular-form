import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formcontrol-exercise',
  templateUrl: './formcontrol-exercise.component.html',
  styleUrls: ['./formcontrol-exercise.component.css']
})
export class FormcontrolExerciseComponent {
  name: FormControl = new FormControl('', Validators.required);
}
