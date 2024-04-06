import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddClassesComponent } from './add-classes/add-classes.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { ViewClassesComponent } from './view-classes/view-classes.component';
import { ViewStudentsComponent } from './view-students/view-students.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddClassesComponent,
    AddStudentsComponent,
    ViewClassesComponent,
    ViewStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
