import {Numbers} from "../../../Functions/Sudoku/checkEveryElement";
import {EMPTY_STRING, ZERO} from "../../../Constants/sudoku";
import {useDispatch, useSelector} from "react-redux";
import {changeNumber} from "../../../Functions/Sudoku/changeNumber";

interface DeleteElement{
    numbers: Array<Array<Numbers>>
    setNumbers: any,
    arrWhiteIds: Array<number>
}

export const DeleteElement = ({numbers, setNumbers, arrWhiteIds}:DeleteElement) =>{
    const targetId = useSelector((state: any) => state.sudoku.targetId);
    const targetState = useSelector((state: any) => state.sudoku.targetState);
    const prevStates = useSelector((state: any) => state.sudoku.prevStates);
    const idTable = useSelector((state: any) => state.sudoku.idTable);
    const dispatch = useDispatch();

    const deleteElement = () =>{
        if(!arrWhiteIds.includes(targetId)) {
            const changedPrevState = [];
            changedPrevState.push(...prevStates);
            changedPrevState.push({id: targetId, number: targetState})
            dispatch({type: 'ADD_PREV_CHANGE', payload: changedPrevState});
            dispatch({type: 'CHANGE_TARGET', id: targetId, target: ZERO, table: idTable});
            if (targetState !== ZERO && targetId > ZERO) {
                changeNumber(numbers, targetId, ZERO, setNumbers)
            }
        }
    }
    return <button  className='main__buttons__button' onClick={() => deleteElement()}>Delete</button>
}