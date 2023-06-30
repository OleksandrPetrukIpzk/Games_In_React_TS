import {useDispatch} from "react-redux";
import {ElementInterface} from "../../../Constants/hangman";

export const EquipElement = ({element}: any) => {
    const dispatch = useDispatch();

    const equipElement = (element: ElementInterface) => {
        dispatch({type: 'SET_ACTUAL_STYLE', payload: JSON.stringify(element)})
    }
    return <button onClick={() => equipElement(element)}>Equip</button>
}