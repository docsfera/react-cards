import React, {useState} from 'react'
import "./MainPage.css"
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters"
import cn from "classnames"

const MainPage = () => {

    const [isShowFilters, setIsShowFilters] = useState(false)

    return (
        <>
            <div className={cn("main", {"main-hide": isShowFilters})}>
                <h1 className="main__header">SpaceX Ships</h1>
                <p className="get-filters" onClick={() => setIsShowFilters(!isShowFilters)}>Фильтры</p>
                <Cards/>
            </div>
            <Filters isShowFilters={isShowFilters} setIsShowFilters={setIsShowFilters}/>
        </>
    )
}

export default MainPage