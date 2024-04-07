import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// creations routes 
import { HomeComponent } from './home/home.component';
import { AddClassesComponent } from './add-classes/add-classes.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { ViewClassesComponent } from './view-classes/view-classes.component';
import { ViewStudentsComponent } from './view-students/view-students.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},// go back to home 
  {path: "home", component: HomeComponent},
  {path: "AddStudents/: studentId", component: AddStudentsComponent},
  {path: "AddClasses", component: AddClassesComponent},
  {path: "ViewClasses/: classtId", component: ViewClassesComponent},
  {path: "ViewStudents/: studentId", component: ViewStudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
