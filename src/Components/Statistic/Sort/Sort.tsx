import {useSelector} from "react-redux";
interface Sort{
    props: string,
    setList: any
}
interface Status{
    status: string
}
export const Sort = ({props, setList}:Sort) =>{
    const infoGame = useSelector((state: any) => state.statistics.infoGame);
    const resetSort = () => {
        setList(JSON.parse(infoGame));
    }
    const handleSortWin = () => {
        const sorted = JSON.parse(infoGame).filter((lose:Status) => lose.status);
        setList(sorted);
    }
    const handleSortLose = () => {
        const sorted = JSON.parse(infoGame).filter((lose:Status) => !lose.status);
        setList(sorted);
    }
    return(<button onClick={() => (props === 'win' && handleSortWin()) || (props === 'lose' && handleSortLose()) || (props === 'reset' && resetSort())}>{props}</button>)
}