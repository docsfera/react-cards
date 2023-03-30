import React from 'react'
import "./MovieFormat.css"
import {Format} from "../../models/Format"
import {useAppDispatch} from "../../store"
import {mainSelector, setMovieFormat} from "../../store/mainSlice"
import {useSelector} from "react-redux"

interface MovieFormatType {
    formatName: Format
}

const MovieFormat: React.FC<MovieFormatType> = ({formatName}) => {
    const dispatch = useAppDispatch()
    const {movieFormats} = useSelector(mainSelector)
    const isFormatChecked = (format: Format) => movieFormats.includes(format)

    const setFormat = (format: Format) => {
        dispatch(setMovieFormat(format))
    }

    return (
        <div className="format__item">
            <input
                className="format__input"
                type="checkbox"
                checked={isFormatChecked(formatName)}
                readOnly
            />
            <label
                className="format__name"
                onClick={() => setFormat(formatName)}
            >{formatName}</label>
        </div>
    )
}

export default MovieFormat