import React, {useEffect, useState} from 'react'
import "./Cards.css"
import ArrowPrev from "../../assets/images/pagination-prev.svg"
import ArrowNext from "../../assets/images/pagination-next.svg"
import Card from "../Card/Card";
import {useSelector, useDispatch} from "react-redux"
import {mainSelector, nextPage, prevPage} from "../../store/mainSlice"
import {Media} from "../../models/Media"

const Cards = () => {
    const [currentMedias, setCurrentMedias] = useState<Media[]>([])
    const {medias, currentPage, movieFormats, searchWord, movieSeason} = useSelector(mainSelector)

    const dispatch = useDispatch()

    useEffect(() => {
        setCurrentMedias(medias)
    }, [medias])


    const next = () => {
        (currentPage * 5 < currentMedias.length) && dispatch(nextPage())
    }
    const prev = () => {
        (currentPage > 1) && dispatch(prevPage())
    }

    useEffect(() => {
        let newMedias = medias.filter((m: any) =>
             m.title.romaji && m.title.romaji.toLowerCase().includes(searchWord.toLowerCase()))
        if(movieFormats.length){
            newMedias = newMedias.filter(m => movieFormats.includes(m.format))
        }
        if(movieSeason !== ""){
            newMedias = newMedias.filter(m => m.season === movieSeason)
        }
        setCurrentMedias(newMedias)
    }, [searchWord, movieFormats, movieSeason])

    if(!medias?.length){
        return <h1>Loading...</h1>
    }

    return (
            currentMedias?.length ? <div className="cards">
                {currentMedias && currentMedias.map((m, index) =>
                    (index < currentPage * 5 && index >= (currentPage - 1) * 5) &&
                    <Card id={m.id} key={m.id} name={m.title.romaji} season={m.season} format={m.format}/>)
                }
                <div className="pagination">
                    <img className="pagination__arrow" src={ArrowPrev} alt="" onClick={prev}/>
                    <p className="pagination__num">{currentPage}</p>
                    <img className="pagination__arrow" src={ArrowNext} alt="" onClick={next}/>
                </div>
            </div> : <h1>Not Found</h1>
    )
}

export default Cards