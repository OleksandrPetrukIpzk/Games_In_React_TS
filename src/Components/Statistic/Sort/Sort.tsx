import React, {Dispatch, FC} from "react";
import {useSelector} from "react-redux";

interface StatusInterface {
    isWin: boolean,
    time: Date,
    commentaries: string
}

interface SortInterface {
    props: string,
    setList: Dispatch<React.SetStateAction<Array<StatusInterface>>>
    allInfoGame: Array<StatusInterface>
}


export const Sort = ({props, allInfoGame, setList,}: SortInterface) => {
    const resetSort = () => {
        setList(allInfoGame);
    }
    const handleSortWin = () => {
        const sorted = allInfoGame.filter((lose: StatusInterface) => lose.isWin);
        setList(sorted);
    }
    const handleSortLose = () => {
        const sorted = allInfoGame.filter((lose: StatusInterface) => !lose.isWin);
        setList(sorted);
    }
    return (<button
        onClick={() => (props === 'win' && handleSortWin()) || (props === 'lose' && handleSortLose()) || (props === 'reset' && resetSort())}>{props}</button>)
}