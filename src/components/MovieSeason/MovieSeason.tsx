import React from 'react'
import "./MovieSeason.css"
import {mainSelector, setMovieSeason} from "../../store/mainSlice"
import {useAppDispatch} from "../../store"
import {useSelector} from "react-redux"
import {Season} from "../../models/Season"

interface MovieSeasonType {
    seasonName: Season
}

const MovieSeason: React.FC<MovieSeasonType> = ({seasonName}) => {
    const dispatch = useAppDispatch()
    const {movieSeason} = useSelector(mainSelector)

    const isSeasonChecked = (season: Season) => movieSeason === season

    const setSeason = (season: Season) => {
        dispatch(setMovieSeason(season))
    }

    return (
        <div className="form_radio">
            <input
                type="radio"
                id={seasonName}
                className="type__input"
                value={seasonName}
                name="drone"
                checked={isSeasonChecked(seasonName)}
                readOnly
            />
            <label
                className="type__name"
                onClick={() => setSeason(seasonName)}
            >{seasonName}</label>
        </div>
    )
}

export default MovieSeason