interface InitialStateInterface {
    coins: number,
    boughtElement: string,
    backgroundStyle: string
}

const initialState: InitialStateInterface = {
    coins: 0,
    boughtElement: '[]',
    backgroundStyle: '{}',
}
const storeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'WIN_MONEY':
            return {...state, coins: state.coins + action.coins}
        case 'BUY_ELEMENT':
            return {...state, coins: state.coins - action.coins}
        case 'SELL_ELEMENT':
            return {...state, coins: action.coins + state.coins}
        case 'ADD_ELEMENT_TO_LIBRARY':
            return {...state, boughtElement: action.payload}
        case 'SET_ACTUAL_STYLE':
            return {...state, backgroundStyle: action.payload}
        default:
            return state
    }
}
export {storeReducer}