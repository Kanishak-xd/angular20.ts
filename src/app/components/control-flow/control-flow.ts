import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
  ngModVar: string = "Synced Text";

  friendList: string[] = ["Abhilaksh", "Dolith", "Devansh"];
}
