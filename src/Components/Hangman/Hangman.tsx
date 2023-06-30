import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Header} from "../Header/Header";
import {HangmanPopup} from "./HangmanPopup";
import {Inputs} from "./Inputs/Inputs";
import {Canvas} from "./Canvas/Canvas";
import {changeBackgroundColor} from "../../Functions/Other/changeBackgroundColor";
import {MAXIMUM_WRONG_NUMBER, MINIMAL_WRONG_COUNT, SECRETS} from "../../Constants/hangman";
import './style.css'

export const Hangman = () => {

    const [letter, setLetter] = useState<string>('');
    const [secretWord] = useState(SECRETS[Math.floor(Math.random() * SECRETS.length)]);
    // UseState need because word rerender after press key
    const [isWrong, setIsWrong] = useState<boolean>(false);
    const wrong = useSelector((state: any) => state.rules.wrong);
    const trueAnswer = useSelector((state: any) => state.rules.trueAnswer);
    const backgroundStyle = JSON.parse(useSelector((state: any) => state.store.backgroundStyle));
    useEffect(() => {
        if (Math.round(wrong.length / MINIMAL_WRONG_COUNT) === MAXIMUM_WRONG_NUMBER) {
            setIsWrong(true);
        } else {
            const onKeyPress = (e: any) => setLetter(e.key.toLowerCase());
            document.addEventListener('keypress', onKeyPress);
            return () => {
                document.removeEventListener('keypress', onKeyPress);
            }
        }
    }, [letter])

    useEffect(() => {
        changeBackgroundColor(backgroundStyle);
    }, [])

    return (
        <div>
            <Header/>
            <h2>Hangman</h2>
            <p>Find the hidden word - Enter a letter</p>
            <div className='cartoon'>
                <Canvas/>
                <div>
                    <h2>Wrong:</h2>
                    <p>{wrong}</p>
                </div>

            </div>
            {isWrong && <HangmanPopup secretWord={secretWord}>
                <h2>You lose secret word has {secretWord} restart your game</h2>
            </HangmanPopup>}
            {trueAnswer === secretWord.length && <HangmanPopup secretWord={secretWord}>
                <h2>You win</h2>
            </HangmanPopup>
            }
            <Inputs secretWord={secretWord} letter={letter}
            />
        </div>
    )


}