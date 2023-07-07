interface InitialStateInterface {
    repeatWord: string,
    userName: string
}

const initialState: InitialStateInterface = {
    repeatWord: "[]",
    userName: "",
}

const statisticReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_REPEAT_WORD':
            return {...state, repeatWord: action.payload}
        case 'ADD_USER': {
            return {...state, userName: action.payload}
        }
        case 'REMOVE_USER': {
            return {...state, userName: ''}
        }
        default:
            return state
    }
}
export {statisticReducer}