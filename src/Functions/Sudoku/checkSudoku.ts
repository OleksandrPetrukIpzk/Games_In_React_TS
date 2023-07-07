import {NumbersType} from "../../Constants/sudoku";


interface CheckSudokuInterface {
    (numbers: Array<Array<NumbersType>>,
     i: number,
     y: number,
     thisNumber: number,
     startCountRow: number,
     endCountRow: number,
     incrementRow: number,
     startCountColumn: number,
     endCountColumn: number,
     incrementColumn: number
    ): Array<number>
}

export const checkSudoku: CheckSudokuInterface = (numbers, i, y, thisNumber, startCountRow, endCountRow, incrementRow, startCountColumn, endCountColumn, incrementColumn) => {
    const arr: Array<number> = [];
    for (let l = startCountRow; l < endCountRow; l += incrementRow) {
        for (let j = startCountColumn; j < endCountColumn; j += incrementColumn) {
            if (numbers[i][y].id !== numbers[l][j].id && thisNumber === numbers[l][j].number && thisNumber) {
                arr.push(numbers[l][j].id);
            }
        }
    }
    return arr;
}