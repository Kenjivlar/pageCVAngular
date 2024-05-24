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

  slide: string[];
  i: number;
  
  constructor(public dialogRef: DialogRef){
    this.slide = ['../../../assets/img/goallist.png', '../../../assets/img/goal2.png', '../../../assets/img/goal1.png'];
    this.i = 0;
  }

  showSlide(){
    return this.slide[this.i];
  }

  prevSlide(){
    this.i == 0 ? (this.i = this.slide.length - 1) : this.i--;
  }

  nextSlide(){
    this.i < this.slide.length - 1 ? this.i++ : (this.i = 0);
  }
}
