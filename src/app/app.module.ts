import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormcontrolExerciseComponent } from './components/formcontrol-exercise/formcontrol-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    FormcontrolExerciseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
