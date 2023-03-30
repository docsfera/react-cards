import React from 'react'
import "./Main.css"
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters"


const Main = () => {
    return (
        <>
            <div className="main">
                <p className="header">SpaceX Ships</p>
                <Cards/>
            </div>
            <Filters/>
        </>
    );
};

export default Main;