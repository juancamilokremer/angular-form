import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormcontrolExerciseComponent } from './components/formcontrol-exercise/formcontrol-exercise.component';
import { FormgroupExerciseComponent } from './components/formgroup-exercise/formgroup-exercise.component';
import { AppRoutingModule } from './app-routing.module ';

@NgModule({
  declarations: [
    AppComponent,
    FormcontrolExerciseComponent,
    FormgroupExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
