import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {createSudoku} from "../../Functions/Sudoku/createSudoku";
import {Numbers} from "../../Functions/Sudoku/checkEveryElement";
import {searchTroubles} from "../../Functions/Sudoku/searchTroubles";
import {ZERO} from "../../Constants/sudoku";
import {isWin} from "../../Functions/Sudoku/isWin";
import {changeBackgroundColor} from "../../Functions/Other/changeBackgroundColor";
import {Header} from "../Header/Header";
import {ChoseDifficult} from "./ChoseDifficult";
import {SudokuPopup} from "./SudokuPopup";
import {Table} from "./Table/Table";
import {generateRandomId} from "../../Functions/Sudoku/generateRandomId";
import './style.css'
import {Buttons} from "./Buttons/Buttons";

export const Sudoku = () => {
    const [difficult, setDifficult] = useState<number>(0);
    const [arrWhiteIds, setArrWhiteIds] = useState<Array<number>>([]);
    const [numbers, setNumbers] = useState<Array<Array<Numbers>>>([]);
    const [dangerIds, setDangerIds] = useState<Array<number>>([]);
    const [isWinGame, setIsWinGame] = useState<boolean>(false);
    const backgroundStyle = JSON.parse(useSelector((state: any) => state.store.backgroundStyle));
    useEffect(() => {
        setNumbers(createSudoku(arrWhiteIds));
    }, [difficult]);
    useEffect(() => {
        setDangerIds(searchTroubles(numbers));
    }, [numbers]);
    useEffect(() => {
        if (dangerIds.length === ZERO && isWin(numbers) && difficult > ZERO) {
            setIsWinGame(true);
        }
    }, [dangerIds]);
    useEffect(() => {
        changeBackgroundColor(backgroundStyle);
    }, [])
    return (<div>
        <Header/>
        {difficult === ZERO && <ChoseDifficult setDifficult={setDifficult} setArrWhiteIds={setArrWhiteIds}/>}
        {(isWinGame && difficult > ZERO) && <SudokuPopup/>}
        <div className='main'>
            {difficult > ZERO && numbers?.map((tableNumber: Array<Numbers>, index) => <Table tableNumber={tableNumber}
                                                                                             dangerIds={dangerIds}
                                                                                             idTable={generateRandomId()}
                                                                                             index={index}
                                                                                             numbers={numbers}/>)}
            { difficult > ZERO && <Buttons arrWhiteIds={arrWhiteIds} numbers={numbers} setNumbers={setNumbers} />}
        </div>
    </div>)
}