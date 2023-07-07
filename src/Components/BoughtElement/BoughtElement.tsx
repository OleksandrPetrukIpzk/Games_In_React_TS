import {FC, useEffect} from "react";
import {useSelector} from "react-redux";
import {Header} from "../Header/Header";
import {Library} from "./Library/Library";
import {changeBackgroundColor} from "../../Functions/Other/changeBackgroundColor";

export const BoughtElement: FC = () => {

    const backgroundStyle = JSON.parse(useSelector((state: any) => state.store.backgroundStyle));

    useEffect(() => {
        changeBackgroundColor(backgroundStyle);
    }, [])

    return (
        <div>
            <Header/>
            <h2>Library</h2>
            <Library/>
        </div>
    );
}