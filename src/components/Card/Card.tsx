import React from 'react'
import "./Card.css"
import {Format} from "../../models/Format"
import {Season} from "../../models/Season"
import arrowGetMedia from "../../assets/images/arrow-get-media.svg"
import {useNavigate} from 'react-router-dom'

type cardType = {
    id: string
    name: string
    format: Format
    season: Season
}

const Card: React.FC<cardType> = (props) => {
    const navigate = useNavigate()

    const goToMovie = () => {
        navigate(`/movie/${props.id}`)
    }

    return (
        <div className="card" onClick={goToMovie}>
            <div className="card__content">
                <p className="card__name">{props.name}</p>
                <div className="card__info">
                    <div className="info__item">
                        <p className="info__type">Формат</p>
                        <p className="info__name">{props.format}</p>
                    </div>
                    <div className="info__item">
                        <p className="info__type">Сезон</p>
                        <p className="info__name">{props.season}</p>
                    </div>

                </div>
            </div>
            <img className="info__arrow" src={arrowGetMedia} alt=""/>
        </div>
    )
}

export default Card