interface InitialStateInterface {
    wrong: string,
    trueAnswer: number
}

const initialState: InitialStateInterface = {
    wrong: '',
    trueAnswer: 0
}
const rulesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_TRUE_ANSWER':
            return {...state, trueAnswer: state.trueAnswer + 1}
        case 'CHANGE_WRONG':
            return {...state, wrong: action.payload}
        case 'BREAK_WRONG_LETTER':
            return {...state, wrong: "", trueAnswer: 0}
        default:
            return state
    }
}
export {rulesReducer}