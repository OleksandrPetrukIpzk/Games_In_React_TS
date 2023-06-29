import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {colorTable} from "../../../Functions/Sudoku/colorTable";
import {hasSimilarElements} from "../../../Functions/Sudoku/hasSimilarElements";
import {Numbers} from "../../../Functions/Sudoku/checkEveryElement";
import {Number} from "./Number";
import '../style.css'
interface Table {
    tableNumber: Array<Numbers>,
    idTable: number,
    dangerIds: Array<number>,
    index: number,
    numbers: Array<Array<any>>
}

export const Table = ({tableNumber, idTable, dangerIds, index, numbers}: Table) => {

    const targetId = useSelector((state: any) => state.sudoku.targetId);
    const lastTableId = tableNumber[tableNumber.length - 1]?.id;
    const firstTableId = tableNumber[0].id;
    const [styleTable, setStyleTable] = useState<object>({border: "2px solid black"})
    useEffect(() => {
        if (hasSimilarElements(tableNumber)) {
            colorTable(setStyleTable, '4px solid red');
        } else if (lastTableId !== undefined && targetId <= lastTableId && firstTableId !== undefined && targetId >= firstTableId && targetId) {
            colorTable(setStyleTable, '4px solid green');
        } else {
            colorTable(setStyleTable, '4px solid black');
        }
    }, [targetId])
    return (<div id={idTable.toString()} className='main__table' style={styleTable}>
        {tableNumber.map((tableNumber) => <Number dangerIds={dangerIds} number={tableNumber.number} id={tableNumber.id}
                                                  idTable={index} numbers={numbers}/>)}
    </div>)
}