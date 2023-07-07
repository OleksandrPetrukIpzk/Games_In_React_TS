import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {changeBackgroundColor} from "../../Functions/Other/changeBackgroundColor";
import {Header} from "../Header/Header";
import {Game} from "./Game/Game";
import {Sort} from "./Sort/Sort";
import './style.css'
import axios from "axios";

interface StatusInterface {
    isWin: boolean,
    time: Date,
    commentaries: string
}

export const Statistic = () => {
    const [list, setList] = useState<Array<StatusInterface>>([]);
    const [allInfoGame, setAllInfoGame] = useState<Array<StatusInterface>>([]);
    const backgroundStyle = JSON.parse(useSelector((state: any) => state.store.backgroundStyle));
    const userName = useSelector((state: any) => state.statistics.userName)

    useEffect(() => {
        axios.post('http://localhost:5000/myData', {name: userName}).then(e => {
                setList(e.data.status)
                setAllInfoGame(e.data.status);
            }
        ).catch(e => console.log(e));
        changeBackgroundColor(backgroundStyle);

    }, [])

    return (
        <div>
            <Header/>
            {list.length &&
                <div className='buttons'>
                    <Sort setList={setList} allInfoGame={allInfoGame} props={'win'}/>
                    <Sort setList={setList} allInfoGame={allInfoGame} props={'lose'}/>
                    <Sort setList={setList} allInfoGame={allInfoGame} props={'reset'}/>

                </div>
            }
            {list.length ? list?.sort((x: any, y: any) => Date.parse(y.time) - Date.parse(x.time)).map((game) =>
                <Game
                    game={game}/>) : <h2>You dont have game</h2>}

        </div>
    )
}