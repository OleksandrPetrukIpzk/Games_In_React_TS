import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Popup from "reactjs-popup";
import {Link} from "react-router-dom";
import {MINIMAL_WRONG_COUNT} from "../../Constants/hangman";
import axios from "axios";

interface HangmanPopupInterface {
    children: any,
    secretWord: string
}

export const HangmanPopup = ({children, secretWord}: HangmanPopupInterface) => {
    const {color, background} = JSON.parse(useSelector((state: any) => state.store.backgroundStyle));
    const trueAnswer = useSelector((state: any) => state.rules.trueAnswer);
    const infoGame = useSelector((state: any) => state.statistics.infoGame);
    const repeatWord = useSelector((state: any) => state.statistics.repeatWord);
    const userName = useSelector((state: any) => state.statistics.userName);
    const listWords: Array<string> = JSON.parse(repeatWord);

    let reward: number = 0;
    const dispatch = useDispatch();

    useEffect(() => {
        const isWin: boolean = trueAnswer === secretWord.length;
        if (isWin) {
            if (listWords.includes(secretWord)) {
                reward = Math.ceil(secretWord.length / MINIMAL_WRONG_COUNT);
            } else {
                reward = secretWord.length;
                listWords.push(secretWord);
                dispatch({type: 'ADD_REPEAT_WORD', payload: JSON.stringify(listWords)})
            }
        }
        const datas : Array<object> = JSON.parse(infoGame);
        datas.push({
           name: userName,
            isWin,
            time: Date(),
            commentaries: secretWord,
        });
        const data = {
            name: userName,
            isWin,
            time: Date(),
            commentaries: secretWord,
        }
        axios.post('http://localhost:5000/data', data).then(e => console.log(e)).catch(err => console.log(err))
        dispatch({type: 'ADD_LIST', payload: JSON.stringify(datas)});
        dispatch({type: 'WIN_MONEY', payload: reward});

    }, []);

    const handleReset = () => {
        window.location.reload();
    }

    return (<Popup open modal disabled position="right center">
        <div className='popup' style={{color: color, background: background}}>
            {children}
            <button onClick={handleReset}>Reset game</button>
            <Link to='/status'>Status</Link>
            <Link to='/shop'>Shop</Link>
        </div>
    </Popup>)
}