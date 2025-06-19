import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal {
  personName = signal<string>("Kanishak");
  personAge = signal("20");

  personInfo = computed(() => this.personName() + " is " + this.personAge() + " years old")

  constructor() {
    setTimeout(() => {
      this.personName.set("Sharma")
    }, 2000);
  }
}
