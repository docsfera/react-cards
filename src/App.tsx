import React, {useEffect} from 'react'
import "./App.css"
import {useDispatch} from "react-redux"
import {setMedias} from "./store/mainSlice"
import {Data} from "./models/Data"
import { useQuery, gql } from '@apollo/client'
import {Routes, Router, Route} from "react-router-dom"
import MainPage from "./components/MainPage/MainPage"
import MoviePage from "./components/MoviePage/MoviePage"

function App() {

    const GET_PAGE = gql`
      query {
        Page(page: 1) {
          media{
            id
            title {
              romaji
            }
            type
            season
            format
            tags {
              name
            }
          }
        }
      }
    `
    const { data } = useQuery<Data>(GET_PAGE)
    const dispatch = useDispatch()
    useEffect(() => {
        if(data && data.Page){
            dispatch(setMedias(data.Page.media))
        }
    }, [data])

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/movie/:id" element={<MoviePage/>}/>
        </Routes>
    </div>
  )
}

export default App
