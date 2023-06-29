import {useDispatch, useSelector} from "react-redux";
import {ONE} from "../../../Constants/sudoku";
import {Numbers} from "../../../Functions/Sudoku/checkEveryElement";

interface PrevElement {
    numbers: Array<Array<Numbers>>,
    setNumbers: any,
    props: string
}

interface StateInterface {
    id?: number,
    number?: number
}

export const PrevElement = ({numbers, setNumbers, props}: PrevElement) => {

    const prevStates = useSelector((state: any) => state.sudoku.prevStates);
    const redoStates = useSelector((state: any) => state.sudoku.redoStates);
    const dispatch = useDispatch();

    const prevElement = (props: string) => {
        const state: StateInterface = {};
        let tableId = 0;
        const changedPrevState = [];
        changedPrevState.push(...prevStates);
        const changedRedoState = [];
        changedRedoState.push(...redoStates);
        if (props === "prev" && prevStates.length > 0) {
            const prevNumbers = numbers.map((row, index) => {
                return row.map(num => {
                    if (num.id === prevStates[prevStates.length - ONE].id) {
                        tableId = index;
                        state.id = num.id;
                        state.number = num.number;
                        return {...num, number: prevStates[prevStates.length - ONE].number}
                    }
                    return num
                })
            })
            changedPrevState.pop();
            changedRedoState.push(state);
            setNumbers(prevNumbers);

        } else if (props === "redo" && redoStates.length > 0) {
            const redoNumbers = numbers.map((row, index) => {
                return row.map(num => {
                    if (num.id === redoStates[redoStates.length - ONE].id) {
                        tableId = index;
                        state.id = num.id;
                        state.number = num.number
                        return {...num, number: redoStates[redoStates.length - ONE].number}
                    }
                    return num
                })
            })
            setNumbers(redoNumbers);
            changedPrevState.push(state);
            changedRedoState.pop();
        }
        dispatch({type: 'CHANGE_TARGET', id: state.id, target: state.number, table: tableId});
        dispatch({type: 'ADD_PREV_CHANGE', payload: changedPrevState});
        dispatch({type: 'ADD_REDO_CHANGE', payload: changedRedoState});
    }


    return (<button className='main__buttons__button'
                    onClick={() => prevElement(props)}>{props}</button>)
}