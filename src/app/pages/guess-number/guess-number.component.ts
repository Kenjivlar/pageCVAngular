import { Component } from '@angular/core';

@Component({
  selector: 'app-guess-number',
  standalone: true,
  imports: [],
  templateUrl: './guess-number.component.html',
  styleUrl: './guess-number.component.css'
})
export class GuessNumberComponent {
  numberRandom = Math.floor(Math.random() * 100) + 1;
  typedN: Number;
  mResult: string;
  countt: Number;
  fCount?: string;

  constructor() {
    this.typedN = 0;
    this.mResult = 'Let\'s play!!!';
    this.countt = 0;
  }
  checkResult(){
    this.typedN = Number((<HTMLInputElement>document.getElementById("typedNumber")).value);
    this.countt = Number(this.countt) + 1;
    this.fCount = 'Attempts: ' + String(this.countt);
    if(Number.isNaN(this.typedN) || Number(this.typedN) < 1 || Number(this.typedN) > 100){
      this.mResult = 'Please type a valid number between 1 and 100';
      (<HTMLInputElement>document.getElementById("message")).style.color = 'red';
    }else if(this.typedN == this.numberRandom){
      this.mResult = 'Congratulations! You have guessed the Number!';
      (<HTMLInputElement>document.getElementById("typedNumber")).disabled = true;
      (<HTMLInputElement>document.getElementById("but")).disabled = true;
      (<HTMLInputElement>document.getElementById("message")).style.color = 'green';
    }else if(Number(this.typedN) < this.numberRandom){
      this.mResult = 'The number it is bigger, try again';
      (<HTMLInputElement>document.getElementById("message")).style.color = 'red';
    }else{
      this.mResult = 'The number is less, try again';
      (<HTMLInputElement>document.getElementById("message")).style.color = 'red';
    }

    (<HTMLInputElement>document.getElementById("typedNumber")).value = "";
  }
  
}
