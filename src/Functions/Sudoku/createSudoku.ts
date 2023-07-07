import {NumbersType, READY_SUDOKU} from "../../Constants/sudoku";

interface CreateSudokuInterface {
    (
        arrWhiteIds: Array<number>
    ): Array<Array<NumbersType>>
}

export const createSudoku: CreateSudokuInterface = (arrWhiteIds) => {
    const start: Array<Array<NumbersType>> = JSON.parse(JSON.stringify(READY_SUDOKU)).map((row: Array<NumbersType>) => {
        return row.map((col: NumbersType) => {
            if (!arrWhiteIds.includes(col.id)) {
                col.number = 0;
            }
            return col;
        })
    })
    return start;
}