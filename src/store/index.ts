import {configureStore} from "@reduxjs/toolkit"
import { useDispatch } from 'react-redux'
import mainReducer from "./mainSlice"

const store = configureStore({
    reducer: {
        main: mainReducer
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store