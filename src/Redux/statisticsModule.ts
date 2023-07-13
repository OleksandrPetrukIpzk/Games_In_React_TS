interface InitialStateInterface {
    userName: string,
    userCoins: number
}

const initialState: InitialStateInterface = {
    userName: "",
    userCoins: 0,
}

const statisticReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_USER': {
            return {...state, userName: action.payload, userCoins: action.coins}
        }
        case 'REMOVE_USER': {
            return {...state, userName: ''}
        }
        default:
            return state
    }
}
export {statisticReducer}