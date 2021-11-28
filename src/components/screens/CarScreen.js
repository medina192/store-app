import React, { useContext } from 'react'
import CarCard from '../singleComponents/CarCard';
import { useNavigate } from "react-router-dom";
import { ClotheContext } from '../../context/ClotheContext';

const CarScreen = () => {


    const { clotheState } = useContext( ClotheContext );

    let navigate = useNavigate();


    const goCheckout = () => {
        navigate(`/checkout/products`)
    }

    const countItems = () => {
        let count = 0;
        for(let i = 0; i < clotheState.length; i++)
        {
            if(clotheState[i].isInCar)
            {
                count++;
            }
        }
        return count;
    }

    return (
        <>
            <div className="container-car-screen">
                {
                    countItems() > 0 ?
                    (
                        <div className="container-car-information">
                        {
                            clotheState.length > 0 ?
                            (
                                <>
                                    <div className="container-cards-car-screen">
                                        {
                                            clotheState.map((clothe, index) => {
                                                if(clothe.isInCar)
                                                {
                                                    return(
                                                        <>
                                                            <CarCard key={ index } clothe={ clothe } />
                                                            <div className="separator-gray"></div>
                                                        </>
                                                    )
                                                }
                                                else{
                                                    return(
                                                        <>
                                                        </>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                    <div className="container-info-go-checkout">
                                        {
                                            /*
                                                                                <p className="message-free-shipping">
                                            El envío en compras arriba de $500 son gratis!
                                        </p>
                                        <div className="container-shipping-cost-car-card">
                                            <p className="tag-shipping-cost-car-card">Costo de envío</p>
                                            <p className="shipping-cost-car-card">$400</p>
                                        </div>
                                        <div className="container-total-cost-car-card">
                                            <p className="tag-total-cost-car-card">Costo de envío</p>
                                            <p className="total-cost-car-card">$400</p>
                                        </div>
                                            */
                                        }
                                        <button onClick={ goCheckout } className="button-continue-purchase-car-card">
                                            Continuar compra
                                        </button>
                                    </div>
                                </>
                            )
                            :
                            (
                                <div className="container-center-text-no-products-car">
                                    <p className="text-no-products-car">No has agregado productos al carrito</p>
                                </div>
                            )
                        }
                    </div>
                    )
                    :
                    (
                        <p className="no-products-in-car-message">No tienes productos añadidos al carrito</p>
                    )
                }
            </div>
        </>
    )
}

export default CarScreen
