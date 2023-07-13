import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {ElementInterface} from "../../../Constants/hangman";


export const SellElement = ({element}: any) => {
    const {name, price} = element;
    const boughtElement = JSON.parse(useSelector((state: any) => state.store.boughtElement));
    let coins: number = useSelector((state: any) => state.statistics.userCoins);
    const userName = useSelector((state: any) => state.statistics.userName);
    const dispatch = useDispatch();

    const sellItem = () => {
        const filteredElement = boughtElement.filter((item: ElementInterface) => item.name !== name);
        const startedElement = {name: 'Classic', price: 0, background: 'dodgerblue', color: 'white'};
        axios.post('http://localhost:5000/user', {
            name: userName,
            money: coins + price
        }).then(e => console.log(e)).catch(e => console.log(e));
        dispatch({type: 'ADD_USER', payload: userName, coins: coins + price});
        dispatch({type: 'ADD_ELEMENT_TO_LIBRARY', payload: JSON.stringify(filteredElement)});
        dispatch({type: 'SET_ACTUAL_STYLE', payload: JSON.stringify(startedElement)})
    }

    return (<button onClick={() => sellItem()}>Sell</button>)
}