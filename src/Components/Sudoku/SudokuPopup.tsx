import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {REWARD} from "../../Constants/sudoku";
import {Link} from "react-router-dom";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import './style.css'

export const SudokuPopup = () => {
    const infoGame = useSelector((state: any) => state.statistics.infoGame);
    const dispatch = useDispatch();

    useEffect(() => {
        const data = JSON.parse(infoGame);
        data.push({
            secretWord: 'Sudoku',
            status: true,
            time: new Date(),
        });
        dispatch({type: 'ADD_LIST', payload: JSON.stringify(data)});
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