import {useSelector} from "react-redux";
import {useEffect} from "react";
import {changeBackgroundColor} from "../../Functions/Other/changeBackgroundColor";
import {Header} from "../Header/Header";
import {ListElements} from "./ListElement/ListElements";
import {Library} from "../BoughtElement/Library/Library";


export const Shop = () => {

    const backgroundStyle = JSON.parse(useSelector((state:any) => state.store.backgroundStyle));


    useEffect(() => {
        changeBackgroundColor(backgroundStyle);
    }, [backgroundStyle]);

    return (<div>
        <Header/>
        <h1>Store</h1>
        <ListElements/>
        <h2>Bought</h2>
        <Library/>
    </div>)
}