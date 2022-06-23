export class Matrix {

  myMatrix:string[][]
  constructor(matrix:string) {
    let columns = matrix.split(/\n/);
    let matrixArr = [];
    for( let i=0; i<columns.length; i++){
      matrixArr.push(columns[i].split(" "))
    }
    this.myMatrix = matrixArr
  }

  get rows(): number[][] {
    let rowsArr = [];
    for (let row=0; row<this.myMatrix.length; row++){
      let oneRow = [];
      for(let column=0; column<this.myMatrix[row].length; column++){
        oneRow.push(parseInt(this.myMatrix[row][column]))
      }
      rowsArr.push(oneRow);
    }
    return rowsArr;
  }

  get columns(): number[][] {
    let columnsArr = [];
    for (let column=0; column<this.myMatrix.length; column++){
      let oneColumn = [];
      for(let row=0; row<this.myMatrix.length; row++){
        oneColumn.push(parseInt(this.myMatrix[row][column]))
      }
      columnsArr.push(oneColumn);
    }
    return columnsArr;
  }
}
