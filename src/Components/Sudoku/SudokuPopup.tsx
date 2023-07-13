import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {Link} from "react-router-dom";
import Popup from "reactjs-popup";
import {REWARD} from "../../Constants/sudoku";
import 'reactjs-popup/dist/index.css';
import './style.css'

export const SudokuPopup = () => {
    const userName = useSelector((state: any) => state.statistics.userName);
    let reward: number = useSelector((state: any) => state.statistics.userCoins) + REWARD;
    const dispatch = useDispatch();

    useEffect(() => {
        const data = {
            name: userName,
            commentaries: "Sudoku",
            isWin: true,
            time: new Date(),
        }
        dispatch({type: 'ADD_USER', payload: userName, coins: reward});
        axios.post('http://localhost:5000/data', data).then(e => console.log(e)).catch(err => console.log(err));
        axios.post('http://localhost:5000/user', {
            name: userName,
            money: reward
        }).then(e => console.log(e)).catch(e => console.log(e));
    }, []);

    const handleReset = () => {
        window.location.reload();
    }

    return (<Popup open modal disabled position="right center">
        <div className='popup'>
            <h1>You win</h1>
            <button onClick={handleReset}>Reset game</button>
            <Link to='/status'>Status</Link>
            <Link to='/shop'>Shop</Link>
        </div>
    </Popup>)
}