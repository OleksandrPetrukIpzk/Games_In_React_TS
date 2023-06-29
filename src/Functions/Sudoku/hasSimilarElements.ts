import {Numbers} from "./checkEveryElement";

interface HasSimilarElements{
    (array: Array<Numbers>):boolean
}
export const hasSimilarElements: HasSimilarElements = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(array[i].number !== 0){
            if (array[i].number === array[j].number && array[i].number !== undefined) {
                return true;
            }
            }
        }
    }
    return false;
}