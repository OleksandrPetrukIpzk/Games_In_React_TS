import {checkEveryElement, NumbersInterface} from "./checkEveryElement";

interface SearchTroublesInterface{
    (numbers:Array<Array<NumbersInterface>>
    ):Array<number>
}


export const searchTroubles:SearchTroublesInterface = (numbers) => {

    const dangerId : Array<number> = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let y = 0; y < 9; y++) {
            if (numbers[i][y].number !== 0) {
                dangerId.push(...checkEveryElement(numbers, i, y, numbers[i][y].number))
            }
        }
    }
    return dangerId;
}