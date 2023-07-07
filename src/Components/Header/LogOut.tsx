import {FC} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";

export const LogOut: FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logOut = () => {
        dispatch({type: 'REMOVE_USER'});
        navigate('/login');
    }

    return (<button onClick={logOut}>Log out</button>)
}