import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // import FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],  // include FormsModule in imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num1: number = 0;
  num2: number = 0;
  sum: number = 0;

  addNumbers(): void {
    this.sum = this.num1 + this.num2;
  }
}
