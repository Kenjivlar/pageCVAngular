import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-rockpaperscissors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rockpaperscissors.component.html',
  styleUrl: './rockpaperscissors.component.css'
})
export class RockpaperscissorsComponent {

  ropasc: Array<string> = [];
  numberRandom: number = 0;
  sizeRps: number;
  selectedRps: string = '';
  result: string;
  flag: boolean;
  

  constructor(){

    this.ropasc = [
      "rock",
      "paper",
      "scissors"
    ];

    this.sizeRps = 0;
    this.result = '';
    this.flag = false
  }

 

  
  play(choice: string){

    this.flag = true;

    this.sizeRps = this.ropasc.length;
    this.numberRandom = Math.floor(Math.random() * this.sizeRps);
    this.selectedRps = this.ropasc[this.numberRandom];

    console.log(this.selectedRps);
    
    console.log('You Press: ' + choice);
    switch (choice) {
      case 'rock':
        // console.log('Its ROCK');
        if(this.selectedRps == 'rock'){
          this.result = 'TIED';
        }else if(this.selectedRps == 'paper'){
          this.result = 'YOU LOSE :(';
        }else if(this.selectedRps == 'scissors'){
          this.result = 'YOU WIN!!!';
        }
        break;
      
      case 'paper':
        // console.log('Its PAPER');
        if(this.selectedRps == 'rock'){
          this.result = 'YOU WIN!!!';
        }else if(this.selectedRps == 'paper'){
          this.result = 'TIED';
        }else if(this.selectedRps == 'scissors'){
          this.result = 'YOU LOSE :(';
        }
        break;
      
      case 'scissors':
        // console.log('Its SCISSORS');
        switch (this.selectedRps) {
          case 'rock':
            this.result = 'YOU LOSE :(';
            break;

            case 'paper':
            this.result = 'YOU WIN!!!';
            break;

            case 'scissors':
            this.result = 'TIED';
            break;
        
          default:
            console.log('Its broken');
            break;
        }
        break;
      default:
        console.log('Its broken');
        break;
    }
  }


  reset(){
    this.selectedRps = '';
    this.result = '';
    this.flag = false;
  }
}
