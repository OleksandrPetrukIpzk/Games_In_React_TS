export interface ElementInterface{
    name: string,
    price: number,
    background: string,
    color: string
}

export const SHOP_LIST : Array<ElementInterface> = [
    {name: 'Black', price: 50, background: 'black', color: 'white'},
    {name: 'Gold', price: 1000, background: 'gold', color: 'black'},
    {name: 'Red', price: 80, background: 'red', color: 'black'},
    {name: 'White', price: 100, background: 'white', color: 'black'},
    {name: 'Classic', price: 0, background: 'dodgerblue', color: 'white'},
    {name: 'Cheep', price: 1, background: 'gray', color: 'white'},
]
export const SECRETS : Array<string> = ['dima', 'sasha', 'kolyia', 'bear', 'skelet', 'vanilla', 'hello', 'bye', 'good', 'bad', 'red','square', 'love', 'open', 'piano', 'melon', 'rad', 'quin', 'king', 'seven', 'think'];

export const MINIMAL_WRONG_COUNT : number = 2;


export const MAXIMUM_WRONG_NUMBER : number = 6;