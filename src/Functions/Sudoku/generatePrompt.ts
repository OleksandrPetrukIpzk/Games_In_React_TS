import {READY_SUDOKU} from "../../Constants/sudoku";
import {NumbersInterface} from "./checkEveryElement";
import {Dispatch} from "react";
interface GeneratePromptInterface{
    (
        numbers:Array<Array<NumbersInterface>>,
        setNumbers: Dispatch<Array<Array<NumbersInterface>>>,
        targetId:number
    ):void
}
export const generatePrompt : GeneratePromptInterface = (numbers, setNumbers, targetId) => {
    if (targetId !== 0) {
        let prompt : number = 0;
        READY_SUDOKU.map((row:Array<NumbersInterface>)=>{
                return row.map((col : NumbersInterface) =>{
                    if(col.id === targetId){
                        prompt = col.number;
                    }
                })
            }
        );

        const promptNumbers : Array<Array<NumbersInterface>> = numbers.map(row => {
            return row.map(number => {
                if (number.id === targetId) {
                    return {...number, number: prompt}
                }
                return number
            })
        })
        setNumbers(promptNumbers);
    }
}