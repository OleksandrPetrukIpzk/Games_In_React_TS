import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {LogOut} from "./LogOut";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export const Header = () => {
    const coins = useSelector((state: any) => state.store.coins);
    const userName = useSelector((state: any) => state.statistics.userName);
    const navigate = useNavigate();
    useEffect(() => {
        if (userName === '') {
            navigate('/login')
        }
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
            <h3>Coin {coins}</h3>
            <p>Hello {userName}</p>

        </div>
    )
}