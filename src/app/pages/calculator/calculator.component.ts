import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  numIn: string[];
  numInN: string;
  num0: string;
  num1: string;
  num2: string;
  num3: string;
  num4: string;
  num5: string;
  num6: string;
  num7: string;
  num8: string;
  num9: string;
  numD: string;
  number1: number;
  number2: number;
  number3: number;
  add: boolean;

  constructor(){
    this.numIn = [];
    this.numInN = '';
    this.num0 = '';
    this.num1 = '';
    this.num2 = '';
    this.num3 = '';
    this.num4 = '';
    this.num5 = '';
    this.num6 = '';
    this.num7 = '';
    this.num8 = '';
    this.num9 = '';
    this.numD = '';
    this.number1 = 0;
    this.number2 = 0;
    this.number3 = 0;
    this.add = false;
  }

  nZero(){
    this.num0 = '0';
    this.numIn.push(this.num0);
    this.numInN = this.numIn.toString();
    this.numInN = this.numInN.replaceAll(',', '');
  }

  nOne(){
    this.num1 = '1';
    this.numIn.push(this.num1);
    this.numInN = this.numIn.toString();
    this.numInN = this.numInN.replaceAll(',', '');
  }

  nTwo(){
    this.num2 = '2';
    this.numIn.push(this.num2);
    this.numInN = this.numIn.toString();
    this.numInN = this.numInN.replaceAll(',', '');
  }

  nThree(){
    this.num3 = '3';
    this.numIn.push(this.num3);
    this.numInN = this.numIn.toString();
    this.numInN = this.numInN.replaceAll(',', '');
  }

  nFour(){
    this.num4 = '4';
    this.numIn.push(this.num4);
    this.numInN = this.numIn.toString();
    this.numInN = this.numInN.replaceAll(',', '');
  }

  nFive(){
    this.num5 = '5';
    this.numIn.push(this.num5);
    this.numInN = this.numIn.toString();
    this.numInN = this.numInN.replaceAll(',', '');
  }

  nSix(){
    this.num6 = '6';
    this.numIn.push(this.num6);
    this.numInN = this.numIn.toString();
    this.numInN = this.numInN.replaceAll(',', '');
  }

  nSeven(){
    this.num7 = '7';
    this.numIn.push(this.num7);
    this.numInN = this.numIn.toString();
    this.numInN = this.numInN.replaceAll(',', '');
  }

  nEight(){
    this.num8 = '8';
    this.numIn.push(this.num8);
    this.numInN = this.numIn.toString();
    this.numInN = this.numInN.replaceAll(',', '');
  }

  nNine(){
    this.num9 = '9';
    this.numIn.push(this.num9);
    this.numInN = this.numIn.toString();
    this.numInN = this.numInN.replaceAll(',', '');
  }

  nDot(){
    this.numD = '.'
    this.numIn.push(this.numD)
    this.numInN = this.numIn.toString();
    this.numInN = this.numInN.replaceAll(',', '');
  }

  resu(){
    console.log(this.numIn)
  }

  del(){
    this.numIn.pop();
    this.numInN = this.numIn.toString();
    this.numInN = this.numInN.replaceAll(',', '');
  }

  cE(){
    this.numIn = [];
    this.numInN = this.numIn.toString();
    this.numInN = this.numInN.replaceAll(',', '');
  }

  sum(){
    this.numInN = this.numIn.toString();
    this.numInN = this.numInN.replaceAll(',', '');
    this.number1 = Number(this.numInN);
    this.cE();
    console.log(this.number1)
    this.add = true;
  }

  result(){
    this.number2 = Number(this.numInN);
    if(this.add){
      this.number3 = this.number1 + this.number2;
      this.numInN = String(this.number3);
      this.numIn = Array.from(this.numInN);
    }
  }
  

}
