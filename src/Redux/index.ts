import {persistStore, persistCombineReducers} from 'redux-persist';
import {createStore} from "redux";
import storage from 'redux-persist/lib/storage'
import {rulesReducer} from "./rulesModule";
import {statisticReducer} from "./statisticsModule";
import {storeReducer} from "./storeModule";
import {sudokuReducer} from "./sudokuModule";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['statistics', 'store'],
};

const persistedReducer = persistCombineReducers(persistConfig, {
    rules: rulesReducer,
    statistics: statisticReducer,
    store: storeReducer,
    sudoku: sudokuReducer,
})

export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
