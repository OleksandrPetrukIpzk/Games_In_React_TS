import React, {Dispatch} from "react";
import {NumbersType} from "../../Constants/sudoku";

interface ChangeNumberInterface {
    (numbers: Array<Array<NumbersType>>,
     targetId: number,
     number: number,
     setNumbers: Dispatch<React.SetStateAction<Array<Array<NumbersType>>>>,
    ): void
}

export const changeNumber: ChangeNumberInterface = (numbers, targetId, number, setNumbers) => {
    const oldNumbers: Array<Array<NumbersType>> = numbers.map(row => {
            return row.map((col: NumbersType) => {
                if (col.id === targetId) {
                    return {...col, number: number}
                }
                return col
            })
        }
    );
    setNumbers(oldNumbers);
}