import {useSelector} from "react-redux";
import {BlockColorWithName} from "../ShopElement/BlockColorWithName";
import {SellElement} from "../ShopElement/SellElement";
import {Buy} from "../ShopElement/Buy";
import {ElementInterface, SHOP_LIST} from "../../../Constants/hangman";

interface libraryInterface {
    name: string
}

export const ListElements = () => {
    const boughtElement = JSON.parse(useSelector((state: any) => state.store.boughtElement));

    return (<div style={{display: 'flex', alignItems: 'center'}}>
        {SHOP_LIST.map((element: ElementInterface) => <div style={{padding: '10px'}}>
            <BlockColorWithName element={element}/>
            <p>Price: {element.price}</p>
            {boughtElement.find((library: libraryInterface) => library.name === element.name) ?
                <SellElement element={element}/>
                :
                <Buy element={element}/>
            }
        </div>)}
    </div>)
}