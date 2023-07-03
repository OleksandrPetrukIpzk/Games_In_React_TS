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
import {Registration} from "./Components/Registration/Registration";
import {Login} from "./Components/Login/Login";
import {AllStatistics} from "./Components/AllStatistics/AllStatistics";

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
    },
    {
        path: '/sudoku',
        element: <Sudoku/>
    },
    {
        path: '/registration',
        element: <Registration/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/worldStatistics',
        element: <AllStatistics/>
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
