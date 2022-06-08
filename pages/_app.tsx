import React, {useEffect} from 'react'
import {AppProps} from 'next/app'

import '../styles/_app.css'
import '../styles/index.scss'
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "../redux";
import {Provider, useDispatch} from "react-redux";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

function SafeHydrate({children}) {
    return (
        <div suppressHydrationWarning>
            {typeof window === 'undefined' ? null : children}
        </div>
    )
}


function MyApp({Component, pageProps}: AppProps) {
    return <SafeHydrate>
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    </SafeHydrate>
}

export default MyApp
