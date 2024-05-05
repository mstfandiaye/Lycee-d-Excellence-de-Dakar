import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { StudentComponent } from './student/student.component';
import { SideBareComponent } from './side-bare/side-bare.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    StudentComponent,
    SideBareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
