import {Numbers} from "./checkEveryElement";

interface IsWin{
    (numbers: Array<Array<Numbers>>,):boolean
}
export const isWin: IsWin = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < 9; j++) {
            if (numbers[i][j].number === 0) {
                return false
            }
        }
    }
    return true;
}