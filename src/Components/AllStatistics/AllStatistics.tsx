import {FC, useEffect, useState} from "react";
import axios from "axios";
import {Game} from "../Statistic/Game/Game";
import {Header} from "../Header/Header";

export const AllStatistics : FC = () =>{
    const [statistics, setStatistics] = useState<Array<object>>([{}]);
    useEffect(() =>{
        axios.get('http://localhost:5000/data').then(e => {
            const copyStatistics = e.data.status;
            setStatistics(copyStatistics);
            }
        )
    },[])
    return(<div>
            <Header/>
            {statistics.sort((x: any, y: any) => Date.parse(y.time) - Date.parse(x.time)).map(game =>
                <div>
                    <Game game={game}/>
                </div>
            )}
        </div>

    )
}