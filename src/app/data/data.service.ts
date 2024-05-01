import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  // classe table by id and name
  private classes = [
    {id : 1, name : 'Terminale S1'},
    {id : 2, name : 'Terminale S2'},
    {id : 3, name : 'Terminale S3'},
    {id : 4, name : 'Terminale S4'}
  ]

  // display class
  getClass() {
    return this.classes ;
  }

  // display class by his id
  getClassById(id : number) {
    return this.classes.find(cls => cls.id = id) ;
  }

  //add class
  addClass(name: string) {
    const id = this.classes.length+1 ;
    return this.classes.push({id, name}) ;
  }
  //update class
  updateClass(id: number, newName: string) {
    const index = this.classes.findIndex(cls => cls.id === id) ;
    if (index !== -1) {
      this.classes[index].name = newName ;
    }
  }
  //delete class 
  deleteClass(id: number) {
    this.classes = this.classes.filter(cls => cls.id !== id)
  }
}
