import {BlockColorWithName} from "../ShopElement/BlockColorWithName";
import {SellElement} from "../ShopElement/SellElement";
import {useSelector} from "react-redux";
import {SHOP_LIST} from "../../../Constants/hangman";
import {Buy} from "../ShopElement/Buy";
interface libraryInterface{
    name: string
}
export const ListElements = () => {
    const boughtElement = JSON.parse(useSelector((state:any) => state.store.boughtElement));

    return (<div style={{display: 'flex', alignItems: 'center'}}>
        {SHOP_LIST.map((element) => <div style={{padding: '10px'}}>
            <BlockColorWithName element={element} />
            <p>Price: {element.price}</p>
            {boughtElement.find((library:libraryInterface) => library.name === element.name) ?
                <SellElement element={element}/>
                :
                <Buy element={element}/>
            }
        </div>)}
    </div>)
}