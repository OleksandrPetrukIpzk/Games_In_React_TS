import React, {Dispatch} from "react";
import {NumbersType} from "../../Constants/sudoku";

interface FillStatusInterface {
    (
        setStatus: Dispatch<React.SetStateAction<number>>,
        numbers: Array<Array<NumbersType>>,
        number: number
    ): void
}

export const fillStatus: FillStatusInterface = (setStatus, numbers, number) => {
    setStatus(0);
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < 9; j++) {
            if (numbers[i][j].number === number) {
                setStatus((prevState: number) => prevState + 1);
            }
        }
    }
}