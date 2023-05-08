import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FormcontrolExerciseComponent } from './components/formcontrol-exercise/formcontrol-exercise.component';
import { FormgroupExerciseComponent } from './components/formgroup-exercise/formgroup-exercise.component';

const routes: Routes = [
    { path: 'formcontrol-exercise', component: FormcontrolExerciseComponent },
    { path: 'formgroup-exercise', component: FormgroupExerciseComponent },
    { path: '',   redirectTo: '/formcontrol-exercise', pathMatch: 'full' },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }