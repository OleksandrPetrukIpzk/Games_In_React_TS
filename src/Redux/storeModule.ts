interface InitialStateInterface {
    boughtElement: string,
    backgroundStyle: string
}

const initialState: InitialStateInterface = {
    boughtElement: '[]',
    backgroundStyle: '{}',
}
const storeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_ELEMENT_TO_LIBRARY':
            return {...state, boughtElement: action.payload}
        case 'SET_ACTUAL_STYLE':
            return {...state, backgroundStyle: action.payload}
        default:
            return state
    }
}
export {storeReducer}