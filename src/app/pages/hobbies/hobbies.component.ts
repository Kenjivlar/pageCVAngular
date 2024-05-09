import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  MatDialog
} from '@angular/material/dialog';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogOverviewComponent);
  }

}
