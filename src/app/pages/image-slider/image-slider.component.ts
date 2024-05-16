import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {

  slide: string[];
  i: number;

  constructor(){
    this.slide = ['../../../assets/img/actin.jpg', '../../../assets/img/sat.png', '../../../assets/img/softtek.png', '../../../assets/img/solera.png' ];
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
