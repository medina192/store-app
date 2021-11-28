import React, { useContext } from 'react';
import { BsCart3, BsSuitClubFill } from "react-icons/bs";
import { useNavigate, Outlet } from "react-router-dom";
import { ClotheContext } from '../../context/ClotheContext'

const Navbar = () => {

    const { clotheState } = useContext( ClotheContext );

    let navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }

    const goCar = () => {
        navigate('/shopCar');
    }

    const countCarClothes = () => {

        let count = 0;
        for(const clotheCar of clotheState)
        {
            if(clotheCar.isInCar)
            count++;
        }
        return count;
    }

    return (
        <>
            <div className="block-container-navbar">
                <div className="aux-container-navbar">
                    <div className="container-navbar">
                        < BsSuitClubFill onClick={ goHome } className="icon-main-logo" />
                        <div className="container-right-options">
                            <div onClick={ goCar } className="container-car-items">
                                <BsCart3 className="icon-car-shop"/>

                                <div className="circle-count-items-car">
                                    <p className="count-items-car">{ countCarClothes() }</p>
                                </div>
                            </div>
                            {
                                /*
                                <AiOutlineMenu onClick={ openMenuHamburguer } className="icon-hamburguer"/>
                                */
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar
