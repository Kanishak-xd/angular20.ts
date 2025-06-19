import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  personName: string = 'Kanishak';
  personAge: number = 20;
  primColClass: string = 'primColor';

  showPopUp() {
    alert("Pop Up!")
  }

  ngModVariable: string = 'Type something'
}
