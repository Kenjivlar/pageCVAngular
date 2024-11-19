import { Component } from '@angular/core';

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [],
  templateUrl: './hangman.component.html',
  styleUrl: './hangman.component.css'
})
export class HangmanComponent {
  heroes: Array<string> = [];
  vcharacters: Array<string> = [];
  cbparts: Array<string> = [];
  choosen: Array<string> = [];
  category: string = 'Choose a Category';
  sizeA?: number;
  rand?: number;
  numberRandom: number = 0;
  selectedString?: string;
  wordE: Array<string> = [];
  wordC: Array<string> = [];
  wordFt?: string;
  wordCf?: string;
  word: string = '____________________';
  attempts: number = 0;
  maxAttempts: number = 7;
  correctLetter?: boolean;
  wordResult: string = '';
  letterA: string = 'a';
  letterB: string = 'b';
  letterC: string = 'c';
  letterD: string = 'd';
  letterE: string = 'e';
  letterF: string = 'f';
  letterG: string = 'g';
  letterH: string = 'h';
  letterI: string = 'i';
  letterJ: string = 'j';
  letterK: string = 'k';
  letterL: string = 'l';
  letterM: string = 'm';
  letterN: string = 'n';
  letterO: string = 'o';
  letterP: string = 'p';
  letterQ: string = 'q';
  letterR: string = 'r';
  letterS: string = 's';
  letterT: string = 't';
  letterU: string = 'u';
  letterV: string = 'v';
  letterW: string = 'w';
  letterX: string = 'x';
  letterY: string = 'y';
  letterZ: string = 'z';
  countMayus: number = 0;
  
 

  constructor(){
    this.heroes = [
      "Iron Man",
      "Spiderman",
      "Thor",
      "Hulk",
      "Black Widow",
      "Hawk Eye",
      "Capitan America"
  ];

  this.vcharacters = [
    "Geralt",
    "Gordon Freeman",
    "Samus Aran",
    "Link",
    "Leon Kennedy",
    "Solid Snake",
    "John",
    "Mario",
    "Kratos"
];

  this.cbparts = [
    "roof",
    "windshield",
    "hood",
    "bumper",
    "window",
    "wheel",
    "grill",
    "radiator"
];

//   this.rand = Math.floor(Math.random() * 3);

//   if(this.rand == 0){
//     this.choosen = this.heroes;
//     this.category = 'Marvel Heroes';
//   }else if(this.rand == 1){
//     this.choosen = this.vcharacters;
//     this.category = 'Videogame Characters';
//   }else if(this.rand == 2){
//     this.choosen = this.cbparts;
//     this.category = 'Car Body Parts';
//   }
//   this.sizeA = this.choosen.length;

//   this.numberRandom = Math.floor(Math.random() * this.sizeA);
  
//   this.selectedString = this.choosen[this.numberRandom];
  
//   // this.typedL = '';

//  for (let ind = 0; ind < this.selectedString.length; ind++) {
//   this.wordE[ind] = '_';
//  }

//  this.word = this.wordE.toString();
//  this.word = this.word.replace(/,/g," ");
                
}


change(changec: string){
  if(changec == 'mH'){
    
    this.wordE = [];
    this.wordC = [];
    this.wordCf = '';
    this.wordFt = '';
    this.attempts = 0;

    this.category = 'Marvel Heroes';
    this.choosen = this.heroes;
    this.sizeA = this.choosen.length;

    this.numberRandom = Math.floor(Math.random() * this.sizeA);
  
    this.selectedString = this.choosen[this.numberRandom];
  
    for (let ind = 0; ind < this.selectedString.length; ind++) {
      this.wordE[ind] = '_';
    }

    this.word = this.wordE.toString();
    this.word = this.word.replace(/,/g," ");

    (<HTMLInputElement>document.getElementById("mhb")).disabled = true;
    (<HTMLInputElement>document.getElementById("vcb")).disabled = false;
    (<HTMLInputElement>document.getElementById("cbpb")).disabled = false;

  }else if(changec == 'vC'){

    this.wordE = [];
    this.wordC = [];
    this.wordCf = '';
    this.wordFt = '';
    this.attempts = 0;

    this.category = 'Videogame Characters';
    this.choosen = this.vcharacters;;
    this.sizeA = this.choosen.length;

    this.numberRandom = Math.floor(Math.random() * this.sizeA);
  
    this.selectedString = this.choosen[this.numberRandom];
  
    for (let ind = 0; ind < this.selectedString.length; ind++) {
      this.wordE[ind] = '_';
    }

    this.word = this.wordE.toString();
    this.word = this.word.replace(/,/g," ");

    (<HTMLInputElement>document.getElementById("vcb")).disabled = true;
    (<HTMLInputElement>document.getElementById("mhb")).disabled = false;
   (<HTMLInputElement>document.getElementById("cbpb")).disabled = false;

  }else if(changec == 'cBp'){

    this.wordE = [];
    this.wordC = [];
    this.wordCf = '';
    this.wordFt = '';
    this.attempts = 0;

    this.category = 'Car Body Parts';
    this.choosen = this.cbparts;
    this.sizeA = this.choosen.length;

    this.numberRandom = Math.floor(Math.random() * this.sizeA);
  
    this.selectedString = this.choosen[this.numberRandom];
  
    for (let ind = 0; ind < this.selectedString.length; ind++) {
      this.wordE[ind] = '_';
    }

    this.word = this.wordE.toString();
    this.word = this.word.replace(/,/g," ");

    (<HTMLInputElement>document.getElementById("cbpb")).disabled = true;
    (<HTMLInputElement>document.getElementById("vcb")).disabled = false;
    (<HTMLInputElement>document.getElementById("mhb")).disabled = false;
  }
}






reset(){
  // (<HTMLInputElement>document.getElementById("typedL")).value = "";

  this.wordE = [];
  this.wordC = [];
  this.wordCf = '';
  this.wordFt = '';
  this.category ='Choose a Category';
  this.word = '____________________';
  this.selectedString = '';
  this.choosen = [];
  this.attempts = 0;
  this.wordResult = '';
  this.maxAttempts = 7;

//   this.sizeA = this.choosen.length;

//   this.numberRandom = Math.floor(Math.random() * this.sizeA);
  
//   this.selectedString = this.choosen[this.numberRandom];
  
//   // this.typedL = '';

//  for (let ind = 0; ind < this.selectedString.length; ind++) {
//   this.wordE[ind] = '_';
//  }

//  this.word = this.wordE.toString();
//  this.word = this.word.replace(/,/g," ");

    (<HTMLInputElement>document.getElementById("cbpb")).disabled = false;
    (<HTMLInputElement>document.getElementById("vcb")).disabled = false;
    (<HTMLInputElement>document.getElementById("mhb")).disabled = false;

    (<HTMLButtonElement>document.getElementById('lbuttonQ')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonW')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonE')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonR')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonT')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonY')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonU')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonI')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonO')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonP')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonA')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonS')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonD')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonF')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonG')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonH')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonJ')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonK')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonL')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonZ')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonX')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonC')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonV')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonB')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonN')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonM')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonMs')).disabled = false;
 
}

another(){
  this.wordE = [];
  this.wordC = [];
  this.wordCf = '';
  this.wordFt = '';
  this.attempts = 0;
  this.wordResult = '';
  this.maxAttempts = 7;

  this.sizeA = this.choosen.length;

  this.numberRandom = Math.floor(Math.random() * this.sizeA);
  
  this.selectedString = this.choosen[this.numberRandom];
  
  // this.typedL = '';

 for (let ind = 0; ind < this.selectedString.length; ind++) {
  this.wordE[ind] = '_';
 }

 this.word = this.wordE.toString();
 this.word = this.word.replace(/,/g," ");

 (<HTMLButtonElement>document.getElementById('lbuttonQ')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonW')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonE')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonR')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonT')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonY')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonU')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonI')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonO')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonP')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonA')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonS')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonD')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonF')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonG')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonH')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonJ')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonK')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonL')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonZ')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonX')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonC')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonV')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonB')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonN')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonM')).disabled = false;
 (<HTMLButtonElement>document.getElementById('lbuttonMs')).disabled = false;
}

checking(letter: string){
  // this.typedL = letter;

  this.selectedString = this.choosen[this.numberRandom];
  this.correctLetter = false;

  for (let index = 0; index < this.selectedString.length; index++) {
    if(this.selectedString.charAt(index) == letter){
      // console.log('nice' + this.typedL);
      console.log('nice' + letter)
      // this.wordE[index] = this.typedL;
      this.wordE[index] = letter;
      this.correctLetter = true;
    }
    
  }

  this.wordC = Object.values(this.wordE);
  this.word = this.wordC.toString();
  this.word = this.word.replace(/,/g," ");


  this.wordCf = this.selectedString.replaceAll(' ', '_');

  this.wordFt = this.wordC.toString();
  this.wordFt = this.wordFt.replace(/,/g,"");

  if(!this.correctLetter){
    this.attempts++;
    this.maxAttempts--;
  }
  if(this.wordFt==this.wordCf){
    this.wordResult = 'Congratulations! YOU GUESSED THE WORD!!!';
    (<HTMLSpanElement>document.getElementById("wR")).style.color = 'green';
    (<HTMLButtonElement>document.getElementById('lbuttonQ')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonW')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonE')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonR')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonT')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonY')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonU')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonI')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonO')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonP')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonA')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonS')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonD')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonF')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonG')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonH')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonJ')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonK')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonL')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonZ')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonX')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonC')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonV')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonB')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonN')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonM')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonMs')).disabled = true;
  }

  if(this.maxAttempts == 0){
    this.wordResult = 'You Ran Out Of Attempts, GAME OVER!!!';
    (<HTMLSpanElement>document.getElementById("wR")).style.color = 'red';
    (<HTMLButtonElement>document.getElementById('lbuttonQ')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonW')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonE')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonR')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonT')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonY')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonU')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonI')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonO')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonP')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonA')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonS')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonD')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonF')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonG')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonH')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonJ')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonK')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonL')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonZ')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonX')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonC')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonV')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonB')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonN')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonM')).disabled = true;
    (<HTMLButtonElement>document.getElementById('lbuttonMs')).disabled = true;
  }

  // (<HTMLInputElement>document.getElementById("typedL")).value = "";
}


mayusB(){
  this.countMayus++;
  if(this.countMayus % 2 != 0){
    this.letterA = 'A';
    this.letterB = 'B';
    this.letterC = 'C';
    this.letterD = 'D';
    this.letterE = 'E';
    this.letterF = 'F';
    this.letterG = 'G';
    this.letterH = 'H';
    this.letterI = 'I';
    this.letterJ = 'J';
    this.letterK = 'K';
    this.letterL = 'L';
    this.letterM = 'M';
    this.letterN = 'N';
    this.letterO = 'O';
    this.letterP = 'P';
    this.letterQ = 'Q';
    this.letterR = 'R';
    this.letterS = 'S';
    this.letterT = 'T';
    this.letterU = 'U';
    this.letterV = 'V';
    this.letterW = 'W';
    this.letterX = 'X';
    this.letterY = 'Y';
    this.letterZ = 'Z';
  }else{
    this.letterA = 'a';
    this.letterB = 'b';
    this.letterC = 'c';
    this.letterD = 'd';
    this.letterE = 'e';
    this.letterF = 'f';
    this.letterG = 'g';
    this.letterH = 'h';
    this.letterI = 'i';
    this.letterJ = 'j';
    this.letterK = 'k';
    this.letterL = 'l';
    this.letterM = 'm';
    this.letterN = 'n';
    this.letterO = 'o';
    this.letterP = 'p';
    this.letterQ = 'q';
    this.letterR = 'r';
    this.letterS = 's';
    this.letterT = 't';
    this.letterU = 'u';
    this.letterV = 'v';
    this.letterW = 'w';
    this.letterX = 'x';
    this.letterY = 'y';
    this.letterZ = 'z';
  }
}

// checkV(){
  
//   console.log(this.rand);
//   console.log(this.numberRandom);
//   console.log(this.selectedString);
//   console.log(this.heroes);
//   console.log(this.heroes[this.numberRandom]);
// }

}
