import React, {Dispatch} from "react";
import {useDispatch, useSelector} from "react-redux";
import {generatePrompt} from "../../../Functions/Sudoku/generatePrompt";
import {NumbersType} from "../../../Constants/sudoku";

interface PromptNumberInterface {
    numbers: Array<Array<NumbersType>>,
    setNumbers: Dispatch<React.SetStateAction<Array<Array<NumbersType>>>>
}

export const PromptNumber = ({numbers, setNumbers}: PromptNumberInterface) => {
    const targetState = useSelector((state: any) => state.sudoku.targetState);
    const targetId = useSelector((state: any) => state.sudoku.targetId);
    const prevStates = useSelector((state: any) => state.sudoku.prevStates);
    const dispatch = useDispatch();

    const answer = () => {
        const changedPrevState: Array<NumbersType> = [];
        changedPrevState.push(...prevStates);
        changedPrevState.push({id: targetId, number: targetState})
        dispatch({type: 'ADD_PREV_CHANGE', payload: changedPrevState});
        generatePrompt(numbers, setNumbers, targetId);
    }

    return (<button className='main__buttons__button' onClick={() => answer()}>Prompt</button>)
}