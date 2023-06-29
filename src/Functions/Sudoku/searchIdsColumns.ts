import {Numbers} from "./checkEveryElement";
import {checkSudoku} from "./checkSudoku";

interface SearchIdsColumns {
    (
        numbers:Array<Array<Numbers>>,
        i:number,
        y: number,
        thisNumber : number,
        startRow:number,
        endRow:number
    ):Array<number>
}

export const searchIdsColumns: SearchIdsColumns = (numbers, i, y, thisNumber, startRow, endRow) =>{
    const dangerIds = [];
    const indexNumber = numbers[i].findIndex(num => num.id === numbers[i][y].id);
    if(indexNumber === 0 || indexNumber === 3 || indexNumber === 6){
        dangerIds.push(...checkSudoku(numbers, i, y, thisNumber, startRow,endRow,3,0,7,3));
    }
    else if(indexNumber === 1 || indexNumber === 4 || indexNumber === 7){
        dangerIds.push(...checkSudoku(numbers, i, y, thisNumber, startRow,endRow,3,1,8,3));
    }
    else if(indexNumber === 2 || indexNumber === 5 || indexNumber === 8){
        dangerIds.push(...checkSudoku(numbers, i, y, thisNumber, startRow,endRow,3,2,9,3));
    }
    return dangerIds

}