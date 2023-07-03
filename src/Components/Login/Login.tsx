import {FC, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

export const Login : FC = () =>{
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const userName = useSelector((state: any) => state.statistics.userName);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = async () => {
        const user: object = {email, password};
        axios.post('http://localhost:5000/login', user).then(e => {
            dispatch({type: 'ADD_USER', payload: e.data.user.name})
            navigate('/');
        }).catch(err => console.log(err))
    }
    useEffect(() =>{
        if(userName !== ''){
            navigate('/');
        }
    },[])
    return(<div>
        <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={() => login()}>Login</button>
        <Link to='/registration'>Registration</Link>
    </div>)
}
