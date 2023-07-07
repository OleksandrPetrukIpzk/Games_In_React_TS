import React, {Dispatch} from "react";
import {NumbersType, READY_SUDOKU} from "../../../Constants/sudoku";

interface AnswerAllSudokuInterface {
    setNumbers: Dispatch<React.SetStateAction<Array<Array<NumbersType>>>>
}

export const AnswerAllSudoku = ({setNumbers}: AnswerAllSudokuInterface) => {
    const answerAllSudoku = () => {
        setNumbers(READY_SUDOKU);
    }
    return (<button className='main__buttons__button' onClick={() => answerAllSudoku()}>Answer</button>)
}