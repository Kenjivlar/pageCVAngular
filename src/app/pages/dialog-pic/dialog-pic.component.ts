import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dialog-pic',
  standalone: true,
  imports: [],
  templateUrl: './dialog-pic.component.html',
  styleUrl: './dialog-pic.component.css'
})
export class DialogPicComponent {
  constructor(public dialogRef: DialogRef){}
}
