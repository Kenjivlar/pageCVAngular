import { Component } from '@angular/core';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogPicComponent } from '../dialog-pic/dialog-pic.component';
@Component({
  selector: 'app-objectives',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './objectives.component.html',
  styleUrl: './objectives.component.css'
})
export class ObjectivesComponent {
  constructor(public dialog: MatDialog){}

  openDialogP(){
    this.dialog.open(DialogPicComponent, {width: "400px"})
  }

}
