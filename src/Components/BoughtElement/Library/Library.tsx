import {useSelector} from "react-redux";
import {useEffect} from "react";
import {BlockColorWithName} from "../../Shop/ShopElement/BlockColorWithName";
import {SellElement} from "../../Shop/ShopElement/SellElement";
import {changeBackgroundColor} from "../../../Functions/Other/changeBackgroundColor";
import {EquipElement} from "../../Shop/ShopElement/EquipElement";

interface elementInterface{
    name: string
}
export const Library = () => {

    const boughtElement = JSON.parse(useSelector((state:any) => state.store.boughtElement));
    const backgroundStyle = JSON.parse(useSelector((state:any) => state.store.backgroundStyle));

    useEffect(() => {
        changeBackgroundColor(backgroundStyle);
    }, [backgroundStyle])

    return (<div style={{display: 'flex', alignItems: 'center'}}>
        {boughtElement.map((element:elementInterface) =>
            <div style={{padding: '10px'}}>
                <BlockColorWithName element={element}/>
                {element.name !== backgroundStyle.name && <EquipElement element={element}/>}
                <SellElement element={element}/>
            </div>
        )}
    </div>)
}