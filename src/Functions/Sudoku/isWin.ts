import {NumbersType} from "../../Constants/sudoku";


interface IsWinInterface {
    (numbers: Array<Array<NumbersType>>,): boolean
}

export const isWin: IsWinInterface = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < 9; j++) {
            if (numbers[i][j].number === 0) {
                return false
            }
        }
    }
    return true;
}