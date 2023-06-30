import React, {Dispatch} from "react";
import {useSelector} from "react-redux";

interface SortInterface {
    props: string,
    setList: Dispatch<React.SetStateAction<Array<object>>>
}

interface StatusInterface {
    status: string
}

export const Sort = ({props, setList}: SortInterface) => {
    const infoGame = useSelector((state: any) => state.statistics.infoGame);
    const resetSort = () => {
        setList(JSON.parse(infoGame));
    }
    const handleSortWin = () => {
        const sorted = JSON.parse(infoGame).filter((lose: StatusInterface) => lose.status);
        setList(sorted);
    }
    const handleSortLose = () => {
        const sorted = JSON.parse(infoGame).filter((lose: StatusInterface) => !lose.status);
        setList(sorted);
    }
    return (<button
        onClick={() => (props === 'win' && handleSortWin()) || (props === 'lose' && handleSortLose()) || (props === 'reset' && resetSort())}>{props}</button>)
}