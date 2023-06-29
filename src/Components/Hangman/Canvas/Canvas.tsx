
import {useSelector} from "react-redux";
import {MINIMAL_WRONG_COUNT} from "../../../Constants/hangman";

export const Canvas = () => {
    const wrong = useSelector((state:any) => state.rules.wrong);

    return (<p>You have {Math.ceil(wrong.length / MINIMAL_WRONG_COUNT)}</p>)
}