import {Numbers} from "./checkEveryElement";

interface CheckSudoku {
    (numbers: Array<Array<Numbers>>,
     i: number, y: number, thisNumber: number, startCountRow: number, endCountRow: number, incrementRow: number, startCountColumn: number,
     endCountColumn:number,
     incrementColumn:number
    ): Array<any>
}

export const checkSudoku : CheckSudoku = (numbers, i, y, thisNumber, startCountRow, endCountRow, incrementRow, startCountColumn, endCountColumn, incrementColumn) => {
    const arr = [];
    for (let l = startCountRow; l < endCountRow; l += incrementRow) {
        for (let j = startCountColumn; j < endCountColumn; j += incrementColumn) {
            if (numbers[i][y].id !== numbers[l][j].id && thisNumber === numbers[l][j].number && thisNumber) {
                arr.push(numbers[l][j].id);
            }
        }
    }
    return arr;
}