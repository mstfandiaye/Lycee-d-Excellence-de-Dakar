import { Component, OnInit } from '@angular/core';
import { DataService } from '../data classes/data.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent implements OnInit {
  classes: {id : number, name : string} []= [];

  constructor (private classService : DataService) {}

  ngOnInit(): void {
    this.loadClasses() ;
  }

  //get the class from service
  loadClasses() {
    this.classes = this.classService.getClasses()
  }

  //add class
  addClass(name: string) {
    this.classService.addClass(name);
    this.loadClasses() ;
  }

  //update class
  updateClass(id: number, newName: string) {
    this.classService.updateClass(id, newName) ;
    this.loadClasses() ;
  }

  //delete class 
  deleteClass(id: number) {
    this.classService.deleteClass(id) ;
    this.loadClasses() ;
  }



}

