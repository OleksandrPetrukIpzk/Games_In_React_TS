import {NumbersType, READY_SUDOKU} from "../../Constants/sudoku";
import {Dispatch} from "react";

interface GeneratePromptInterface {
    (
        numbers: Array<Array<NumbersType>>,
        setNumbers: Dispatch<Array<Array<NumbersType>>>,
        targetId: number
    ): void
}

export const generatePrompt: GeneratePromptInterface = (numbers, setNumbers, targetId) => {
    if (targetId !== 0) {
        let prompt: number = 0;
        READY_SUDOKU.map((row: Array<NumbersType>) => {
                return row.map((col: NumbersType) => {
                    if (col.id === targetId) {
                        prompt = col.number;
                    }
                })
            }
        );

        const promptNumbers: Array<Array<NumbersType>> = numbers.map(row => {
            return row.map(number => {
                if (number.id === targetId) {
                    return {...number, number: prompt}
                }
                return number
            })
        })
        setNumbers(promptNumbers);
    }
}