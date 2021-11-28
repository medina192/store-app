import React from 'react'
import MainContainerCards from '../singleComponents/MainContainerCards';
import MainImage from '../singleComponents/MainImage';


const MainPage = () => {
    return (
        <div className="background-color-main-page">
            <div className="main-container">
                <MainImage />
                <h2 className="collection-title">Colección de invierno 2022</h2>
                <MainContainerCards />
            </div>
        </div>
    )
}

export default MainPage
