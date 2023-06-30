import {READY_SUDOKU} from "../../Constants/sudoku";
import {NumbersInterface} from "./checkEveryElement";

interface CreateSudokuInterface {
    (
        arrWhiteIds: Array<number>
    ):Array<Array<NumbersInterface>>
}
export const createSudoku : CreateSudokuInterface = (arrWhiteIds) => {
    const start : Array<Array<NumbersInterface>> = JSON.parse(JSON.stringify(READY_SUDOKU)).map((row:Array<NumbersInterface>) => {
        return row.map((col:NumbersInterface) => {
            if (!arrWhiteIds.includes(col.id)) {
                col.number = 0;
            }
            return col;
        })
    })
    return start;
}