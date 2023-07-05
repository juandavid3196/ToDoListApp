import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  openForm : boolean = false;

  newTask(): void {
    this.openForm = true;
  }

  exitForm(): void {
    this.openForm= false;
  }
}
