import {Component, inject} from '@angular/core';
import {MatSnackBarModule, MatSnackBarRef} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css'],
  styles: [
    `
    :host {
      display: flex;
    }

    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule],
})
export class SnackBarComponent {
  snackBarRef = inject(MatSnackBarRef);
}
