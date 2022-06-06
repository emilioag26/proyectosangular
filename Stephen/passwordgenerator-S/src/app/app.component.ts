import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password ='';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%&'
    let validChars = ''
    if(this.includeLetters){
      validChars += letters
    }
    if(this.includeNumbers){
      validChars += numbers
    }
    if(this.includeSymbols){
      validChars += symbols
    }
    let generatedPasssword = '';

    for(let i=0; i<this.length; i++){
      const index = Math.floor(Math.random()*validChars.length)
      generatedPasssword += validChars[index]
    }
    this.password = generatedPasssword
  }
  onChangeLength(event:any){
    const value = parseInt(event.target.value)
    if(!isNaN(value)){
      this.length = value
    }
  }
  onChangeUseLetters(){

    this.includeLetters = !this.includeLetters
  }
  onChangeUseNumbers(){

    this.includeNumbers = !this.includeNumbers
  }
  onChangeUseSymbols(){

    this.includeSymbols = !this.includeSymbols
  }
}
