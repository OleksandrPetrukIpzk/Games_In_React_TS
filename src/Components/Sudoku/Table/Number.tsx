import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {colorElement} from "../../../Functions/Sudoku/colorElement";
import {NumbersType, ZERO} from "../../../Constants/sudoku";
import '../style.css'

interface NumberInterface {
    number: number | undefined,
    id: number | undefined,
    dangerIds: Array<number>,
    idTable: number,
    numbers: Array<Array<NumbersType>>
}

export const Number = ({number, id, dangerIds, idTable, numbers}: NumberInterface) => {
    const targetId = useSelector((state: any) => state.sudoku.targetId);
    const targetState = useSelector((state: any) => state.sudoku.targetState)
    const dispatch = useDispatch();
    const [style, setStyle] = useState<object>({color: "black", background: "white"})
    const changeTargetId = () => {
        dispatch({type: 'CHANGE_TARGET', id, target: number, table: idTable})
    }

    useEffect(() => {
        if (targetId === id && id !== undefined && dangerIds.includes(id)) {
            colorElement(setStyle, 'orange')
        } else if (id !== undefined && dangerIds.includes(id)) {
            colorElement(setStyle, 'red')
        } else if (targetId === id) {
            colorElement(setStyle, 'green')
        } else {
            colorElement(setStyle, 'white')
        }
        if (number !== undefined && targetState === number && number !== ZERO) {

            colorElement(setStyle, 'purple')
            if (id !== undefined && targetId === id && dangerIds.includes(id)) {
                colorElement(setStyle, 'orange')
            } else if (id !== undefined && dangerIds.includes(id)) {
                colorElement(setStyle, 'blue')
            } else if (id !== undefined && targetId === id && !dangerIds.includes(id)) {
                colorElement(setStyle, 'green')
            }
        }
    }, [targetId, numbers, dangerIds])

    return <div id={id?.toString()} style={style} onClick={() => changeTargetId()}
                className='main__table__number'>{number !== 0 && number} </div>
}