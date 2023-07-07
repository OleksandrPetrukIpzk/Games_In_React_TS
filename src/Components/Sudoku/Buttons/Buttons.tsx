import React, {Dispatch} from "react";
import {ChangeNumber} from "./ChangeNumber";
import {PromptNumber} from "./PromptNumber";
import {AnswerAllSudoku} from "./AnswerAllSudoku";
import {PrevElement} from "./PrevElement";
import {DeleteElement} from "./DeleteElement";
import {NUMBER_BUTTONS, NumbersType} from "../../../Constants/sudoku";

interface ButtonsInterface {
    numbers: Array<Array<NumbersType>>,
    setNumbers: Dispatch<React.SetStateAction<Array<Array<NumbersType>>>>,
    arrWhiteIds: Array<number>
}

export const Buttons = ({numbers, setNumbers, arrWhiteIds}: ButtonsInterface) => {

    return (
        <div className='main__buttons'>

            {NUMBER_BUTTONS.map(number => <ChangeNumber number={number} setNumbers={setNumbers} numbers={numbers}
                                                        arrWhiteIds={arrWhiteIds}/>)}

            <DeleteElement numbers={numbers} setNumbers={setNumbers} arrWhiteIds={arrWhiteIds}/>
            <PrevElement setNumbers={setNumbers} numbers={numbers} props='prev'/>
            <PrevElement setNumbers={setNumbers} numbers={numbers} props='redo'/>
            <PromptNumber numbers={numbers} setNumbers={setNumbers}/>
            <AnswerAllSudoku setNumbers={setNumbers}/>
        </div>
    )

}