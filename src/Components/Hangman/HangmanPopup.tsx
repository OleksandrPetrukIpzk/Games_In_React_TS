import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Popup from "reactjs-popup";
import axios from "axios";


interface HangmanPopupInterface {
    children: any,
    secretWord: string
}

export const HangmanPopup = ({children, secretWord}: HangmanPopupInterface) => {

    const {color, background} = JSON.parse(useSelector((state: any) => state.store.backgroundStyle));
    const trueAnswer = useSelector((state: any) => state.rules.trueAnswer);
    const userName = useSelector((state: any) => state.statistics.userName);
    let reward: number = useSelector((state: any) => state.statistics.userCoins);
    const dispatch = useDispatch();

    useEffect(() => {
        const isWin: boolean = trueAnswer === secretWord.length;

        if (isWin) {
            reward += secretWord.length;
        }
        const data = {
            name: userName,
            isWin,
            time: Date(),
            commentaries: secretWord,
        }
        dispatch({type: 'ADD_USER', payload: userName, coins: reward});
        axios.post('http://localhost:5000/data', data).then(e => console.log(e)).catch(err => console.log(err))
        axios.post('http://localhost:5000/user', {
            name: userName,
            money: reward
        }).then(e => console.log(e)).catch(e => console.log(e));

    }, []);

    const handleReset = () => {
        window.location.reload();
    }

    return (<Popup open modal disabled position="right center">
        <div className='popup' style={{color: color, background: background}}>
            {children}
            <button onClick={handleReset}>Reset game</button>
            <Link to='/statistic'>Status</Link>
            <Link to='/shop'>Shop</Link>
        </div>
    </Popup>)
}