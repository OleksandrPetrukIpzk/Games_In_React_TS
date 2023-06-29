import {searchIdsColumns} from "./searchIdsColumns";
import {searchIdsRows} from "./searchIdsRows";

export interface Numbers{
    id?: number,
    number?: number
}
interface CheckEveryElement{
    (numbers: Array<Array<any>>,
     i:number,
     y:number,
     thisNumber:number
     ):Array<number>
}

export const checkEveryElement : CheckEveryElement = (numbers, i, y, thisNumber) =>{
    const dangerIds : Array<number> = [];
    if(i <= 2){
        dangerIds.push(...searchIdsRows(numbers, i, y, thisNumber, 0, 3));
    }
    if(i >= 3 && i <= 5){
        dangerIds.push(...searchIdsRows(numbers, i, y, thisNumber, 3, 6));
    }
    if(i >= 6){
        dangerIds.push(...searchIdsRows(numbers, i, y, thisNumber, 6, 9));
    }
    if (i === 0 || i === 3 || i === 6) {
        dangerIds.push(...searchIdsColumns(numbers, i, y, thisNumber, 0, 7));
    }
    if (i === 1 || i === 4 || i === 7) {
        dangerIds.push(...searchIdsColumns(numbers, i, y, thisNumber, 1, 8));
    }
    if (i === 2 || i === 5 || i === 8) {
        dangerIds.push(...searchIdsColumns(numbers, i, y, thisNumber, 2, 9));
    }
    for(let j = 0; j < 9; j++){
        if(numbers[i][j].number === thisNumber && numbers[i][j].id !== numbers[i][y].id){
            dangerIds.push(numbers[i][j].id);
        }
    }
    return dangerIds
}