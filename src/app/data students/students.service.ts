import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  //create students 
  private students = [
    {

      id: 1,
      name: '',
      surname: '',
      classe: '',
      cardId: '',

    }
  ]
  constructor() { }


  //get sturdent
  getStudent() {
    return this.students;
  }

  //get student by element
  getStudentByElement(
    id: number,
    name: string,
    surname: string,
    classe: string,
    cardId: string
  ) {
    return (
      this.students.find(sdt => sdt.id = id),
      this.students.find(sdt => sdt.name = name),
      this.students.find(sdt => sdt.surname = surname),
      this.students.find(sdt => sdt.classe = classe),
      this.students.find(sdt => sdt.cardId = cardId)
    )
  }

  // add class
  addStudent(

    name: string,
    surname: string,
    classe: string,
    cardId: string
  ) {
    const id = this.students.length + 1;
    return this.students.push({ id, name, surname, classe, cardId });
  }


  //update student 
  updateStudent(
    id: number,
    newName: string,
    newSurname: string,
    newClasse: string,
    newCardId: string) {
    const index = this.students.findIndex(sdt => sdt.id = id);
    if (index !== -1) {
      this.students[index].name = newName;
      this.students[index].surname = newSurname;
      this.students[index].classe = newClasse;
      this.students[index].cardId = newCardId;
    }
  }

  //delete student 
  deleteStudent(cardId: string) {
    this.students = this.students.filter(sdt => sdt.cardId = cardId);
  }

}
