import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {ElementInterface} from "../../../Constants/hangman";



export const Buy = ({element}: any) => {
    const boughtElement = JSON.parse(useSelector((state: any) => state.store.boughtElement));
    let coins: number = useSelector((state: any) => state.statistics.userCoins);
    const userName = useSelector((state: any) => state.statistics.userName);
    const dispatch = useDispatch();
    const buyElement = (element: ElementInterface) => {
        const {price} = element;
        if (coins > price) {
            boughtElement.push(element);
            dispatch({type: 'ADD_ELEMENT_TO_LIBRARY', payload: JSON.stringify(boughtElement)});
            dispatch({type: 'SET_ACTUAL_STYLE', payload: JSON.stringify(element)})
            dispatch({type: 'ADD_USER', payload: userName, coins: coins - price});
            axios.post('http://localhost:5000/user', {
                name: userName,
                money: coins - price
            }).then(e => console.log(e)).catch(e => console.log(e));

        }
    }
    return (
        <button onClick={() => buyElement(element)}>Buy</button>
    )
}