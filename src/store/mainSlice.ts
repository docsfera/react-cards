import {createSlice, PayloadAction } from "@reduxjs/toolkit"
import {RootState} from "./index"
import {Format} from "../models/Format"
import {Media} from "../models/Media"
import {Season} from "../models/Season"

export interface MainState {
    medias: Media[]
    currentPage: number
    searchWord: string
    movieFormats: Format[]
    movieSeason: Season
}

const initialState: MainState = {
    medias: [],
    currentPage: 1,
    searchWord: "",
    movieFormats: [],
    movieSeason: "",
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setMedias(state, action: PayloadAction<Media[]>){
            state.medias = action.payload
        },
        nextPage(state){
            state.currentPage++
        },
        prevPage(state){
            state.currentPage--
        },
        setSearchWord(state, action: PayloadAction<string>){
            state.currentPage = 1
            state.searchWord = action.payload
        },
        setMovieFormat(state, action: PayloadAction<Format>){
            state.currentPage = 1
            let index = state.movieFormats.indexOf(action.payload)
            if(index !== -1){
                state.movieFormats.splice(index, 1)
            }else{
                state.movieFormats.push(action.payload)
            }
        },
        setMovieSeason(state, action: PayloadAction<Season>){
            state.currentPage = 1
            if(state.movieSeason !== action.payload){
                state.movieSeason = action.payload
            }else{
                state.movieSeason = ""
            }
        }
    }
})

export const {setMedias, nextPage, prevPage, setSearchWord, setMovieFormat, setMovieSeason} = mainSlice.actions
export const mainSelector = (state: RootState) => state.main
export default mainSlice.reducer