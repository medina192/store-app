import React,  { useContext } from 'react';
import MainContainerCard from './MainContainerCard';
import { ClotheContext } from '../../context/ClotheContext'

const MainContainerCards = () => {

    const { clotheState  } = useContext( ClotheContext );

    return (
        <div className="main-container-cards">
            {
                clotheState.map(( clothe, index ) => {

                    return(
                        <MainContainerCard key={index} clothe= { clothe } />
                    )
                })
            }
        </div>
    )
}

export default MainContainerCards
