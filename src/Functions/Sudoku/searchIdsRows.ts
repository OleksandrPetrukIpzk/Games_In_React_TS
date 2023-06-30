import {checkSudoku} from "./checkSudoku";
import {NumbersInterface} from "./checkEveryElement";
import {isRightColumn} from "./isRightColumn";

interface SearchIdsRowsInterface {
    (numbers: Array<Array<NumbersInterface>>,
    i:number,
    y:number,
    thisNumber:number,
    startRow: number,
    endRow: number): Array<number>
}

export const searchIdsRows : SearchIdsRowsInterface = (numbers, i, y, thisNumber, startRow, endRow) =>{
    const dangerIds : Array<number> = [];
    const indexNumber = numbers[i].findIndex(num => num.id === numbers[i][y].id);
    if(isRightColumn(indexNumber, 0, 2)){
        dangerIds.push(...checkSudoku(numbers, i, y, thisNumber, startRow,endRow,1,0,3,1));
    }
    else if(isRightColumn(indexNumber, 3, 5)){
        dangerIds.push(...checkSudoku(numbers, i, y, thisNumber, startRow,endRow,1,3,6,1));
    }
    else if(isRightColumn(indexNumber, 6, 7)){
        dangerIds.push(...checkSudoku(numbers, i, y, thisNumber, startRow,endRow,1,6,9,1));
    }
    return dangerIds
}