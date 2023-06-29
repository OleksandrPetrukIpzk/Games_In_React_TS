

const initialState = {
    targetId: 0,
    targetTable: 0,
    targetState: 0,
    prevStates: [],
    redoStates: [],
}
const sudokuReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'CHANGE_TARGET':
            return {...state, targetId: action.id, targetState: action.target, targetTable: action.table}
        case 'ADD_PREV_CHANGE':
            return {...state, prevStates: action.payload}
        case 'ADD_REDO_CHANGE':
            return {...state, redoStates: action.payload}
        default:
            return state
    }
}
export {sudokuReducer}