import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {changeBackgroundColor} from "../../Functions/Other/changeBackgroundColor";
import {Header} from "../Header/Header";
import {Game} from "./Game/Game";
import {Sort} from "./Sort/Sort";
import './style.css'
export const Statistic = () => {
    const backgroundStyle = JSON.parse(useSelector((state: any) => state.store.backgroundStyle));
    const infoGame = useSelector((state: any) => state.statistics.infoGame);
    const [list, setList] = useState<Array<object>>(JSON.parse(infoGame));


    useEffect(() => {
        changeBackgroundColor(backgroundStyle);
    }, [])

    return (
        <div>
            <Header/>
            {infoGame.length &&
                <div className='buttons'>
                    <Sort setList={setList} props={'win'}/>
                    <Sort setList={setList} props={'lose'}/>
                    <Sort setList={setList} props={'reset'}/>

                </div>
            }
            {infoGame.length ? list?.sort((x: any, y: any) => Date.parse(y.time) - Date.parse(x.time)).map((game) => <Game
                game={game}/>) : <h2>You dont have game</h2>}

        </div>
    )
}