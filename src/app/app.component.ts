import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'calculadora';
  ValorA:number;
  ValorB:number;
  resultado:number;

  onSumar():void{
    this.resultado= this.ValorA + this.ValorB;
  }

  onResta(){
    this.resultado= this.ValorA - this.ValorB;
  }

  onMulti(){
    this.resultado=this.ValorA * this.ValorB;
  }

  onDiv(){

      this.resultado= this.ValorA / this.ValorB;


    if(this.ValorA <= 0){
      this.resultado=0;
    }

    if(this.ValorB <= 0){
      this.resultado=0;
    }
  }
}
