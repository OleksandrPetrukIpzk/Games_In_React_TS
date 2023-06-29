import {READY_SUDOKU} from "../../../Constants/sudoku";

export const AnswerAllSudoku = ({setNumbers}:any) => {
    const answerAllSudoku = () => {
        setNumbers(READY_SUDOKU);
    }
    return (<button className='main__buttons__button' onClick={() => answerAllSudoku()}>Answer</button>)
}