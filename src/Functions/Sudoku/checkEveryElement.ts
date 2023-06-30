import {searchIdsColumns} from "./searchIdsColumns";
import {searchIdsRows} from "./searchIdsRows";
import {isRightColumn} from "./isRightColumn";
import {isRightRow} from "./isRightRow";

export interface NumbersInterface{
    id: number,
    number: number
}
interface CheckEveryElementInterface{
    (numbers: Array<Array<NumbersInterface>>,
     i:number,
     y:number,
     thisNumber:number
     ):Array<number>
}

export const checkEveryElement : CheckEveryElementInterface = (numbers, i, y, thisNumber) =>{
    const dangerIds : Array<number> = [];
    if(isRightColumn(i, 0, 2)){
        dangerIds.push(...searchIdsRows(numbers, i, y, thisNumber, 0, 3));
    }
    if(isRightColumn(i, 3, 5)){
        dangerIds.push(...searchIdsRows(numbers, i, y, thisNumber, 3, 6));
    }
    if(isRightColumn(i, 6, 8)){
        dangerIds.push(...searchIdsRows(numbers, i, y, thisNumber, 6, 9));
    }
    if (isRightRow(i, 0, 3, 6)) {
        dangerIds.push(...searchIdsColumns(numbers, i, y, thisNumber, 0, 7));
    }
    if (isRightRow(i, 1, 4, 7)) {
        dangerIds.push(...searchIdsColumns(numbers, i, y, thisNumber, 1, 8));
    }
    if (isRightRow(i, 2, 5, 8)) {
        dangerIds.push(...searchIdsColumns(numbers, i, y, thisNumber, 2, 9));
    }
    for(let j = 0; j < 9; j++){
        if(numbers[i][j].number === thisNumber && numbers[i][j].id !== numbers[i][y].id){
            dangerIds.push(numbers[i][j].id);
        }
    }
    return dangerIds
}