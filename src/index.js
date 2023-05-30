import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import myReducer from './cardsSlice'
import App from './App';
import './index.css'
import FetchComponent from "./fetchData";

const store = configureStore({
    reducer: {
        shop: myReducer
    }
})


ReactDOM.render(
    <div className="flex flex-row-reverse justify-between mx-8">
        <Provider store={store}>
            <App />
            <FetchComponent />
        </Provider>
    </div>
    ,
    document.getElementById('root')
)