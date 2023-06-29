import {Numbers} from "../../../Functions/Sudoku/checkEveryElement";
import {NUMBER_BUTTONS} from "../../../Constants/sudoku";
import {ChangeNumber} from "./ChangeNumber";
import {PromptNumber} from "./PromptNumber";
import {AnswerAllSudoku} from "./AnswerAllSudoku";
import {PrevElement} from "./PrevElement";
import {DeleteElement} from "./DeleteElement";

interface Buttons{
    numbers: Array<Array<Numbers>>,
    setNumbers: any,
    arrWhiteIds: Array<number>
}
export const Buttons = ({numbers, setNumbers, arrWhiteIds}:Buttons) =>{

    return (
        <div className='main__buttons'>

            {NUMBER_BUTTONS.map(number => <ChangeNumber number={number} setNumbers={setNumbers} numbers={numbers} arrWhiteIds={arrWhiteIds}/>)}

            <DeleteElement numbers={numbers} setNumbers={setNumbers} arrWhiteIds={arrWhiteIds}/>
            <PrevElement setNumbers={setNumbers} numbers={numbers} props='prev'/>
            <PrevElement setNumbers={setNumbers} numbers={numbers} props='redo'/>
            <PromptNumber numbers={numbers} setNumbers={setNumbers}/>
            <AnswerAllSudoku setNumbers={setNumbers}/>
        </div>
    )

}