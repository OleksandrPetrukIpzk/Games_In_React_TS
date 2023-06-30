import {NumbersInterface} from "./checkEveryElement";
import React, {Dispatch} from "react";


interface ChangeNumberInterface{
    (numbers: Array<Array<NumbersInterface>>,
     targetId: number,
     number: number,
     setNumbers: Dispatch<React.SetStateAction<Array<Array<NumbersInterface>>>>,
    ):void
}

export const changeNumber : ChangeNumberInterface = (numbers, targetId, number, setNumbers) =>{
    const oldNumbers : Array<Array<NumbersInterface>> = numbers.map( row =>{
            return row.map((col:NumbersInterface) => {
                if(col.id === targetId){
                    return {...col, number: number}
                }
                return col
            })
        }
    );
    setNumbers(oldNumbers);
}