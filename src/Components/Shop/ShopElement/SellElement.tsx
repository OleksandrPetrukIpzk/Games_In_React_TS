import {useDispatch, useSelector} from "react-redux";
import {ElementInterface} from "../../../Constants/hangman";

export const SellElement = ({element}: any) => {
    const {name, price} = element;
    const boughtElement = JSON.parse(useSelector((state: any) => state.store.boughtElement));
    const dispatch = useDispatch();

    const sellItem = () => {
        const filteredElement = boughtElement.filter((item: ElementInterface) => item.name !== name);
        const startedElement = {name: 'Classic', price: 0, background: 'dodgerblue', color: 'white'};
        dispatch({type: 'SELL_ELEMENT', coins: price});
        dispatch({type: 'ADD_ELEMENT_TO_LIBRARY', payload: JSON.stringify(filteredElement)});
        dispatch({type: 'SET_ACTUAL_STYLE', payload: JSON.stringify(startedElement)})
    }

    return (<button onClick={() => sellItem()}>Sell</button>)
}