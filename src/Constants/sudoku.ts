import {mixGenerate} from "../Functions/Sudoku/mixGenerate";
import {NumbersInterface} from "../Functions/Sudoku/checkEveryElement";


export const ANSWER : Array<Array<NumbersInterface>> = [[{id: 1, number: 0}, {id: 2, number: 0}, {id: 3, number: 0}, {id: 4, number: 0}, {
    id: 5,
    number: 0
}, {id: 6, number: 0}, {id: 7, number: 0}, {id: 8, number: 0}, {id: 9, number: 0},], [{
    id: 10,
    number: 0
}, {id: 11, number: 0}, {id: 12, number: 0}, {id: 13, number: 0}, {id: 14, number: 0}, {
    id: 15,
    number: 0
}, {id: 16, number: 0}, {id: 17, number: 0}, {id: 18, number: 0},], [{id: 19, number: 0}, {
    id: 20,
    number: 0
}, {id: 21, number: 0}, {id: 22, number: 0}, {id: 23, number: 0}, {id: 24, number: 0}, {
    id: 25,
    number: 0
}, {id: 26, number: 0}, {id: 27, number: 0},], [{id: 28, number: 0}, {id: 29, number: 0}, {
    id: 30,
    number: 0
}, {id: 31, number: 0}, {id: 32, number: 0}, {id: 33, number: 0}, {id: 34, number: 0}, {
    id: 35,
    number: 0
}, {id: 36, number: 0},], [{id: 37, number: 0}, {id: 38, number: 0}, {id: 39, number: 0}, {
    id: 40,
    number: 0
}, {id: 41, number: 0}, {id: 42, number: 0}, {id: 43, number: 0}, {id: 44, number: 0}, {
    id: 45,
    number: 0
},], [{id: 46, number: 0}, {id: 47, number: 0}, {id: 48, number: 0}, {id: 49, number: 0}, {
    id: 50,
    number: 0
}, {id: 51, number: 0}, {id: 52, number: 0}, {id: 53, number: 0}, {id: 54, number: 0},], [{
    id: 55,
    number: 0
}, {id: 56, number: 0}, {id: 57, number: 0}, {id: 58, number: 0}, {id: 59, number: 0}, {
    id: 60,
    number: 0
}, {id: 61, number: 0}, {id: 62, number: 0}, {id: 63, number: 0},], [{id: 64, number: 0}, {
    id: 65,
    number: 0
}, {id: 66, number: 0}, {id: 67, number: 0}, {id: 68, number: 0}, {id: 69, number: 0}, {
    id: 70,
    number: 0
}, {id: 71, number: 0}, {id: 72, number: 0},], [{id: 73, number: 0}, {id: 74, number: 0}, {
    id: 75,
    number: 0
}, {id: 76, number: 0}, {id: 77, number: 0}, {id: 78, number: 0}, {id: 79, number: 0}, {
    id: 80,
    number: 0
}, {id: 81, number: 0},],

]
const typeGenerate : number = Math.ceil(Math.random() * 8);

export const READY_SUDOKU : any = ANSWER.map((row : Array<NumbersInterface>, index) => {
    switch (typeGenerate) {
        case 1: {
            return mixGenerate(0, 6, 3, 1, 7, 4, 2,8,5, index, row);
        }
        case 2: {
            return mixGenerate(1, 4, 7, 0, 3, 6, 2,5,8, index, row);
        }
        case 3:{
            return mixGenerate(1, 4, 7, 0, 3, 6, 2,5,8, index, row);
        }
        case 4:{
            return mixGenerate(2, 5, 8, 0, 3, 6, 1,4,7, index, row);
        }
        case 5:{
            return mixGenerate(6, 3, 0, 4, 7, 1, 5,8,2, index, row);
        }
        case 6:{
            return mixGenerate(3, 0, 6, 7, 4, 1, 8,5,2, index, row);
        }
        case 7: {
            return mixGenerate(6, 3, 0, 7, 4, 1, 8,5,2, index, row);
        }
        case 8: {
            return mixGenerate(3, 6, 0, 4, 7, 1, 5,8,2, index, row);
        }
        default: break;
    }


})


export const REWARD : number = 100;

export const NUMBER_BUTTONS : Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const TWO_CHOSE_BUTTON: number = 2;

export const FOUR_CHOSE_BUTTON: number = 4;

export const SIX_CHOSE_BUTTON : number= 6;

export const NINE_CHOSE_BUTTON: number = 9;

export const ZERO: number = 0;

export const EMPTY_STRING = "";

export const ONE: number = 1;
