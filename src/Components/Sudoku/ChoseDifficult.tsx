import React, {Dispatch} from "react";
import Popup from "reactjs-popup";
import {generateWhiteListIds} from "../../Functions/Sudoku/generateWhiteListIds";

interface ChoseDifficultInterface {
    setDifficult: Dispatch<React.SetStateAction<number>>,
    setArrWhiteIds: Dispatch<React.SetStateAction<Array<number>>>
}

export const ChoseDifficult = ({setDifficult, setArrWhiteIds}: ChoseDifficultInterface) => {
    const choseLevel = (value: number) => {
        setDifficult(value);
        setArrWhiteIds(generateWhiteListIds(value));
    }
    return (<Popup open modal disabled position="right center">
        <div className='popup'>
            <h3>Chose your difficult</h3>
            <button onClick={(e) => choseLevel(30)}>Easy</button>
            <button onClick={(e) => choseLevel(50)}>Medium</button>
            <button onClick={(e) => choseLevel(70)}>Hard</button>
        </div>
    </Popup>)
}