import {useDispatch, useSelector} from "react-redux";
import {ElementInterface} from "../../../Constants/hangman";

export const Buy = ({element}: any) => {
    const coins = useSelector((state: any) => state.store.coins);
    const boughtElement = JSON.parse(useSelector((state: any) => state.store.boughtElement));
    const dispatch = useDispatch();
    const buyElement = (element: ElementInterface) => {
        const {price} = element;
        if (coins > price || coins === 0) {
            boughtElement.push(element);
            dispatch({type: 'BUY_ELEMENT', coins: price});
            dispatch({type: 'ADD_ELEMENT_TO_LIBRARY', payload: JSON.stringify(boughtElement)});
            dispatch({type: 'SET_ACTUAL_STYLE', payload: JSON.stringify(element)})
        }
    }
    return (
        <button onClick={() => buyElement(element)}>Buy</button>
    )
}