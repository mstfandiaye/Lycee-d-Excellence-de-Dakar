import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../data students/students.service'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  students: {
    id: number,
    name: string,
    surname: string,
    classe: string,
    cardId: string
  }[] = [];

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.loadStudents();
    //this.studentsService.getStudent() ;
  }

  loadStudents() {
    this.students = this.studentsService.getStudent();
  }

  // add class
  addStudent(
    name: string,
    surname: string,
    classe: string,
    cardId: string
  ) {
    this.studentsService.addStudent(name, surname, classe, cardId);
    this.loadStudents();
  }


  //update student 
  updateStudent(
    id: number,
    newName: string,
    newSurname: string,
    newClasse: string,
    newCardId: string) {
    this.studentsService.updateStudent(id, newName, newSurname, newClasse, newCardId);
    this.loadStudents();

  }


  //delete student 
  deleteStudent(cardId: string) {
    this.studentsService.deleteStudent(cardId);
    this.loadStudents()
  }


}
