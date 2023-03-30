import React, {useState} from 'react'
import "./Filters.css"
import {useAppDispatch} from "../../store"
import {mainSelector, setSearchWord} from "../../store/mainSlice"
import MovieSeason from "../MovieSeason/MovieSeason"
import MovieFormat from "../MovieFormat/MovieFormat"
import {useSelector} from "react-redux"
import cn from "classnames"

interface FiltersType {
    isShowFilters: boolean
    setIsShowFilters: React.Dispatch<React.SetStateAction<boolean>>
}

const Filters: React.FC<FiltersType> = (props) => {
    const dispatch = useAppDispatch()
    const [isShowFormats, setIsShowFormats] = useState(false)
    const {movieFormats} = useSelector(mainSelector)

    const changeIsShowFilters = () => {
        props.isShowFilters && props.setIsShowFilters(!props.isShowFilters)
    }

    return (
        <div className={cn("filters", {"filters-show": props.isShowFilters})}>
            <p className="filters__title" onClick={changeIsShowFilters}>Фильтры</p>
            <div className="filters__field filters__field-name">
                <p className="filters__name">Название</p>
                <input
                    className="filters__input"
                    placeholder=" "
                    onChange={(e) => dispatch(setSearchWord(e.target.value))}
                />
            </div>
            <div className="filters__field filters__field-port">
                <p className="filters__name">Формат</p>
                <div className="filters__input-container" onClick={() => setIsShowFormats(!isShowFormats)}>
                    <input className={cn("filters__input", {"active": isShowFormats})}
                           placeholder=" "
                           value={`Выбрано ${movieFormats.length}`}
                           readOnly
                    />
                    <div className="filters__arrow"> </div>
                </div>


                {isShowFormats &&
                    <div className="filters__formats">
                        <MovieFormat formatName="TV"/>
                        <MovieFormat formatName="MOVIE"/>
                        <MovieFormat formatName="OVA"/>
                    </div>
                }
            </div>
            <div className="filters__season">
                <p className="filters__name">Сезон</p>
                <MovieSeason seasonName="SPRING"/>
                <MovieSeason seasonName="SUMMER"/>
                <MovieSeason seasonName="FALL"/>
                <MovieSeason seasonName="WINTER"/>
            </div>
        </div>
    )
}

export default Filters