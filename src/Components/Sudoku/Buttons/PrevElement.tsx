import React, {Dispatch} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NumbersType, ONE} from "../../../Constants/sudoku";


interface PrevElementInterface {
    numbers: Array<Array<NumbersType>>,
    setNumbers: Dispatch<React.SetStateAction<Array<Array<NumbersType>>>>,
    props: string
}

export const PrevElement = ({numbers, setNumbers, props}: PrevElementInterface) => {

    const prevStates = useSelector((state: any) => state.sudoku.prevStates);
    const redoStates = useSelector((state: any) => state.sudoku.redoStates);
    const dispatch = useDispatch();

    const prevElement = (props: string) => {

        let tableId = 0;
        const state: NumbersType = {id: 0, number: 0};
        const changedPrevState: Array<NumbersType> = [];
        changedPrevState.push(...prevStates);
        const changedRedoState: Array<NumbersType> = [];
        changedRedoState.push(...redoStates);
        if (props === "prev" && prevStates.length > 0) {
            const prevNumbers: Array<Array<NumbersType>> = numbers.map((row, index) => {
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
            const redoNumbers: Array<Array<NumbersType>> = numbers.map((row, index) => {
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