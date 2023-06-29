import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store, persistor} from "./Redux";
import {PersistGate} from "redux-persist/integration/react";
import {Sudoku} from "./Components/Sudoku/Sudoku";
import {Statistic} from "./Components/Statistic/Statistic";
import {Shop} from "./Components/Shop/Shop";
import {BoughtElement} from "./Components/BoughtElement/BoughtElement";
import {Hangman} from "./Components/Hangman/Hangman";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Hangman/>
    },
    {
        path: '/statistic',
        element: <Statistic/>
    },
    {
        path: '/shop',
        element: <Shop/>
    },
    {
        path: '/library',
        element: <BoughtElement/>
    }
])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router}/>
        </PersistGate>
    </Provider>
);
