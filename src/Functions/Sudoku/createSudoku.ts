import {READY_SUDOKU} from "../../Constants/sudoku";
import {Numbers} from "./checkEveryElement";

interface CreateSudoku {
    (
        arrWhiteIds: Array<number>
    ):Array<Array<Numbers>>
}
export const createSudoku : CreateSudoku = (arrWhiteIds) => {
    const start = JSON.parse(JSON.stringify(READY_SUDOKU)).map((row:Array<object>) => {
        return row.map((col:any) => {
            if (!arrWhiteIds.includes(col.id)) {
                col.number = 0;
            }
            return col;
        })
    })
    return start;
}