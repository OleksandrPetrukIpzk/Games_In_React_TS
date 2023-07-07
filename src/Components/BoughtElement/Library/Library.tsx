import {FC, useEffect} from "react";
import {useSelector} from "react-redux";
import {BlockColorWithName} from "../../Shop/ShopElement/BlockColorWithName";
import {SellElement} from "../../Shop/ShopElement/SellElement";
import {EquipElement} from "../../Shop/ShopElement/EquipElement";
import {changeBackgroundColor} from "../../../Functions/Other/changeBackgroundColor";
import {ElementInterface} from "../../../Constants/hangman";

export const Library: FC = () => {

    const boughtElement = JSON.parse(useSelector((state: any) => state.store.boughtElement));
    const backgroundStyle = JSON.parse(useSelector((state: any) => state.store.backgroundStyle));

    useEffect(() => {
        changeBackgroundColor(backgroundStyle);
    }, [backgroundStyle])

    return (<div style={{display: 'flex', alignItems: 'center'}}>
        {boughtElement.map((element: ElementInterface) =>
            <div style={{padding: '10px'}}>
                <BlockColorWithName element={element}/>
                {element.name !== backgroundStyle.name && <EquipElement element={element}/>}
                <SellElement element={element}/>
            </div>
        )}
    </div>)
}