import {Link} from "react-router-dom";
import {FC, useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";

export const Registration: FC = () => {
    const [login, setLogin] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const userName = useSelector((state: any) => state.statistics.userName);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const registration = async () => {
        const user: object = {name: login, email, password};
        axios.post('http://localhost:5000/registration', user).then(e => {
            dispatch({type: 'ADD_USER', payload: login})
            navigate('/');
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        if (userName !== '') {
            navigate('/');
        }
    }, [])
    return (<div>
        <input type='text' placeholder='login' onChange={(e) => setLogin(e.target.value)}/>
        <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={() => registration()}>Registration</button>
        <Link to='/login'>Login</Link>
    </div>)
}