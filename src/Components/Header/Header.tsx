import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import axios from "axios";
import {LogOut} from "./LogOut";

export const Header: FC = () => {
    const userName = useSelector((state: any) => state.statistics.userName);
    const userCoins = useSelector((state: any) => state.statistics.userCoins);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(userCoins);
    useEffect(() => {
        if (userName === '') {
            navigate('/login')
        }
        axios.post('http://localhost:5000/getData', {name: userName}).then(e => {
                console.log(e.data.user.money)
                dispatch({type: 'ADD_USER', payload: userName, coins: e.data.user.money})
            }
        ).catch(e => console.log(e))

    }, [])

    return (
        <div>
            <Link to='/sudoku'>Sudoku</Link>
            <Link to='/'>Hangman</Link>
            <Link to='/statistic'>Status</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/library'>Library</Link>
            <Link to='/worldStatistics'>World statistics</Link>
            <LogOut/>
            <h3>Coin {userCoins}</h3>
            <p>Hello {userName}</p>

        </div>
    )
}