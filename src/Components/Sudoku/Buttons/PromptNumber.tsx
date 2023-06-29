import {Numbers} from "../../../Functions/Sudoku/checkEveryElement";
import {generatePrompt} from "../../../Functions/Sudoku/generatePrompt";
import {useDispatch, useSelector} from "react-redux";

interface PromptNumber{
    numbers: Array<Array<Numbers>>,
    setNumbers: any
}
export const PromptNumber = ({numbers, setNumbers}:PromptNumber) => {
    const targetState = useSelector((state:any) => state.sudoku.targetState);
    const targetId = useSelector((state:any) => state.sudoku.targetId);
    const prevStates = useSelector((state:any) => state.sudoku.prevStates);
    const dispatch = useDispatch();

    const answer = () => {
            const changedPrevState = [];
            changedPrevState.push(...prevStates);
            changedPrevState.push({id: targetId, number: targetState})
            dispatch({type: 'ADD_PREV_CHANGE', payload: changedPrevState});
            generatePrompt(numbers, setNumbers, targetId);
    }

    return (<button className='main__buttons__button' onClick={() => answer()}>Prompt</button>)
}