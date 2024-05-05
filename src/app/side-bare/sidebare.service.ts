import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebareService {

  constructor() { }

  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;

    if (sidebar.style.left === '-250px') {
      sidebar.style.left = '0';
    } else {
      sidebar.style.left = '-250px';
    }
  }

}
