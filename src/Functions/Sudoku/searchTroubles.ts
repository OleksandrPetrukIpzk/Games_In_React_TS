import {checkEveryElement, Numbers} from "./checkEveryElement";

interface SearchTroubles{
    (numbers:Array<Array<any>>
    ):Array<number>
}


export const searchTroubles:SearchTroubles = (numbers) => {

    const dangerId = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let y = 0; y < 9; y++) {
            if (numbers[i][y].number !== 0) {
                dangerId.push(...checkEveryElement(numbers, i, y, numbers[i][y].number))
            }
        }
    }
    return dangerId;
}