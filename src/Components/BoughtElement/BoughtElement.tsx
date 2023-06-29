import {Header} from "../Header/Header";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {changeBackgroundColor} from "../../Functions/Other/changeBackgroundColor";
import {Library} from "./Library/Library";

export const BoughtElement = () =>{

    const backgroundStyle = JSON.parse(useSelector((state:any) => state.store.backgroundStyle));

    useEffect(()=>{
        changeBackgroundColor(backgroundStyle);
    },[])

    return(
        <div>
            <Header/>
        <h2>Library</h2>
        <Library/>
        </div>
    );
}