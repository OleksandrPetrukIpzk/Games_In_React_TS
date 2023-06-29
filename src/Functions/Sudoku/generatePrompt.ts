import {READY_SUDOKU} from "../../Constants/sudoku";
import {Numbers} from "./checkEveryElement";
interface GeneratePrompt{
    (
        numbers:Array<Array<Numbers>>,
        setNumbers:any,
        targetId:number
    ):void
}
export const generatePrompt : GeneratePrompt = (numbers, setNumbers, targetId) => {
    if (targetId !== 0) {
        let prompt = 0;
        READY_SUDOKU.map((row:any)=>{
                return row.map((col:any) =>{
                    if(col.id === targetId){
                        prompt = col.number;
                    }
                })
            }
        );

        const promptNumbers = numbers.map(row => {
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