import {checkSudoku} from "./checkSudoku";
import {Numbers} from "./checkEveryElement";
interface SearchIdsRows {
    (numbers: Array<Array<Numbers>>,
    i:number,
    y:number,
    thisNumber:number,
    startRow: number,
    endRow: number): Array<number>
}

export const searchIdsRows : SearchIdsRows = (numbers, i, y, thisNumber, startRow, endRow) =>{
    const dangerIds = [];
    const indexNumber = numbers[i].findIndex(num => num.id === numbers[i][y].id);
    if(indexNumber < 3){
        dangerIds.push(...checkSudoku(numbers, i, y, thisNumber, startRow,endRow,1,0,3,1));
    }
    else if(indexNumber >=3 && indexNumber <=5){
        dangerIds.push(...checkSudoku(numbers, i, y, thisNumber, startRow,endRow,1,3,6,1));
    }
    else if(indexNumber < 8){
        dangerIds.push(...checkSudoku(numbers, i, y, thisNumber, startRow,endRow,1,6,9,1));
    }
    return dangerIds
}