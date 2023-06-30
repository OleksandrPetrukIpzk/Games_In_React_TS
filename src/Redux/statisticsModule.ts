interface InitialStateInterface {
    infoGame: string,
    repeatWord: string,
}

const initialState : InitialStateInterface = {
    infoGame: "[]",
    repeatWord: "[]",
}

const statisticReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_LIST':
            return {...state, infoGame: action.payload}
        case 'ADD_REPEAT_WORD':
            return {...state, repeatWord: action.payload}

        default:
            return state
    }
}
export {statisticReducer}