import {useDispatch} from "react-redux";

export const EquipElement = ({element}:any) =>{
    const dispatch = useDispatch();

    const equipElement = (element:object) => {
        dispatch({type: 'SET_ACTUAL_STYLE', payload: JSON.stringify(element)})
    }
    return<button onClick={() => equipElement(element)}>Equip</button>
}