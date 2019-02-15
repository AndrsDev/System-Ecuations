import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecuations',
  templateUrl: './ecuations.component.html',
  styleUrls: ['./ecuations.component.css']
})
export class EcuationsComponent implements OnInit {

  literals = ['a','b','c','d','e','f','g'];
  selectedLiterals;
  variablesNumber;

  matrix = [];
  result = [];

  constructor() { }

  ngOnInit() {
 
    this.setNumberOfVariables(2);
  }

  setNumberOfVariables(num){  
    this.variablesNumber = num;
    this.selectedLiterals = this.literals.slice(0, num);

    this.matrix = [];
    for (let i = 0; i < num; i++) {
     this.matrix[i] = new Array(num + 1).fill("0"); 
    }
  }


  solve(){
    let matrix = this.matrix.slice();

    for (let column = 0; column < this.variablesNumber - 1; column++) {
      for (let row = column + 1; row < this.variablesNumber; row++) {
        matrix[row] = this.operateRows(matrix[column], matrix[row], column);
      }
    }

    console.log(matrix.slice());
           
    for (let column = this.variablesNumber - 1; column > 0; column--) {
      for (let row = column - 1; row >= 0; row--) {
        matrix[row] = this.operateRows(matrix[column], matrix[row], column);
      }
    }

    this.result = [];
    for (let pos = 0; pos < this.variablesNumber; pos++) {
      this.result.push((matrix[pos][this.variablesNumber]/matrix[pos][pos]).toString());
    }

    console.log(this.result);

  }


  operateRows(row1, row2, column){
    let newRow = [];
    for (let i = 0; i <= this.variablesNumber; i++) {
      const first = (row2[i]*row1[column]);
      const second = (row1[i]*row2[column]);
      newRow[i] =  first - second;
    }

    return newRow;
  }

}
