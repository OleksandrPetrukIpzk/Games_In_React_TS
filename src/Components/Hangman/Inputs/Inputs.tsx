import {Block} from "./Block";

interface InputsInterface{
    secretWord: string,
    letter: string
}

export const Inputs = ({secretWord, letter}:InputsInterface) => {
    return (<div className='blocks'>
        {secretWord.split('').map(item =>
            <Block value={item} letter={letter} secretWord={secretWord}/>
        )}
    </div>)
}