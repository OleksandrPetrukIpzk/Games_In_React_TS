import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {REWARD} from "../../Constants/sudoku";
import {Link} from "react-router-dom";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import './style.css'
import axios from "axios";

export const SudokuPopup = () => {
    const userName = useSelector((state: any) => state.statistics.userName);
    const dispatch = useDispatch();

    useEffect(() => {
        const data = {
            name: userName,
            commentaries: "Sudoku",
            isWin: true,
            time: new Date(),
        }
        axios.post('http://localhost:5000/data', data).then(e => console.log(e)).catch(err => console.log(err))
        dispatch({type: 'WIN_MONEY', coins: REWARD});
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