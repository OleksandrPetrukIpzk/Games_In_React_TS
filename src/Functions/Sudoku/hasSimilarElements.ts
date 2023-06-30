import {NumbersInterface} from "./checkEveryElement";

interface HasSimilarElementsInterface{
    (array: Array<NumbersInterface>):boolean
}
export const hasSimilarElements: HasSimilarElementsInterface = (array) => {
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