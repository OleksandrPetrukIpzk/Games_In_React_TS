import React, {Dispatch, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeNumber} from "../../../Functions/Sudoku/changeNumber";
import {fillStatus} from "../../../Functions/Sudoku/fillStatus";
import {
    FOUR_CHOSE_BUTTON,
    NINE_CHOSE_BUTTON,
    NumbersType,
    SIX_CHOSE_BUTTON,
    TWO_CHOSE_BUTTON
} from "../../../Constants/sudoku";

interface ChangeNumberInterface {
    number: number,
    numbers: Array<Array<NumbersType>>,
    setNumbers: Dispatch<React.SetStateAction<Array<Array<NumbersType>>>>,
    arrWhiteIds: Array<number>
}

export const ChangeNumber = ({number, numbers, setNumbers, arrWhiteIds}: ChangeNumberInterface) => {

    const [status, setStatus] = useState(0);
    const targetState = useSelector((state: any) => state.sudoku.targetState);
    const targetId = useSelector((state: any) => state.sudoku.targetId);
    const prevStates = useSelector((state: any) => state.sudoku.prevStates);
    const idTable = useSelector((state: any) => state.sudoku.idTable);
    const dispatch = useDispatch();

    const addPrevChange = () => {
        if (!arrWhiteIds.includes(targetId)) {
            const changedPrevState = [];
            changedPrevState.push(...prevStates);
            changedPrevState.push({id: targetId, number: targetState})
            dispatch({type: 'ADD_PREV_CHANGE', payload: changedPrevState});
            dispatch({type: 'CHANGE_TARGET', id: targetId, target: number, table: idTable});
            changeNumber(numbers, targetId, number, setNumbers);
        }
    }

    useEffect(() => {
        return fillStatus(setStatus, numbers, number);
    }, [targetId])

    return (<div>
        <p>{status}</p>
        <button onClick={() => addPrevChange()}
                className='main__buttons__button'
                style={{
                    borderTop: `${status > TWO_CHOSE_BUTTON && '3px solid blue'}`,
                    borderRight: `${status > FOUR_CHOSE_BUTTON && '3px solid blue'}`,
                    borderBottom: `${status > SIX_CHOSE_BUTTON && '3px solid blue'}`,
                    borderLeft: `${status > NINE_CHOSE_BUTTON && '3px solid blue'}`
                }}>
            {number}
        </button>
    </div>)
}