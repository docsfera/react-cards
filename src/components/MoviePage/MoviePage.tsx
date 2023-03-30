import React, {useEffect} from 'react'
import "./MoviePage.css"
import {useParams} from "react-router-dom"
import {useSelector} from "react-redux";
import {mainSelector} from "../../store/mainSlice"
import {NavLink} from "react-router-dom"


const MoviePage = () => {
    const {id} = useParams()
    const media = useSelector(mainSelector).medias.find(m => m.id == id)
    useEffect(() => {}, [media])

    const getInfoCard = (str: string | undefined) => str || "Неизвестен"

    const getTags = () => {
        let str = ""
        media && media.tags?.map(({name}, index) => {
            index === 0 ? str = name : str = `${str}, ${name}`
        })
        return str
    }


    return (
        <div className="card-page">
            <NavLink to="/" className="back" >Вернуться</NavLink>
            {media ?
                <div className="movie__content">
                    <h2 className="card__title">{media.title.romaji}</h2>
                    <div className="card__fields">
                        <div className="field__item">
                            <p className="info__type">Сезон</p>
                            <p className="info__name">{getInfoCard(media.season)}</p>
                        </div>
                        <div className="field__item">
                            <p className="info__type">Тип</p>
                            <p className="info__name">{getInfoCard(media.type)}</p>
                        </div>
                        <div className="field__item">
                            <p className="info__type">Статус</p>
                            <p className="info__name">{getInfoCard(media.status)}</p>
                        </div>
                        <div className="field__item">
                            <p className="info__type">Формат</p>
                            <p className="info__name">{getInfoCard(media.format)}</p>
                        </div>
                    </div>
                    <div className="card__tags mission">
                        <p className="tags__title info__type">Теги:</p>
                        <p className="info__name tags__desc">{getTags()}</p>
                    </div>
                </div>
                : <h1>Loading...</h1>}

        </div>
    )
}

export default MoviePage