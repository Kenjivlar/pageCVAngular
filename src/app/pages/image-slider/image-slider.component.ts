import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {

  number1: number;
  number2: number;
  number3?: number;
  number4: string;
  slide: string[];
  i: number;
 


  constructor(){
    this.slide = ['../../../assets/img/actin.jpg', '../../../assets/img/sat.png', '../../../assets/img/softtek.png', '../../../assets/img/solera.png' ];
    this.i = 0;
    this.number1 = 0;
    this.number2 = 90;
    this.number4 = '';


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

  saveNumber(){
    this.number1 = Number((<HTMLInputElement>document.getElementById("n2")).value);
    this.number3 = this.number1 + this.number2;
  }

  nFur(){
    this.number4 = '4';
  }



}
