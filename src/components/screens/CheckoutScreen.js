import React, { useContext } from 'react';
//import InputsCheckout from '../singleComponents/InputsCheckout';
import '../../layouts/screens/CheckoutScreen.css'
import { useParams, useNavigate } from "react-router-dom";
import { ClotheContext } from '../../context/ClotheContext'
import CheckoutProductCard from '../singleComponents/CheckoutProductCard';

const CheckoutScreen = () => {

    /*
    const inputsValues = useRef(null);

    const checkInputs = (values) => {
        inputsValues.current = values;
    }
    */
   const navigate = useNavigate();

    const { products } = useParams();

    const { clotheState, dispatchClothe  } = useContext( ClotheContext );

    const goBuyScreen = () => {

        const action = {
            type: 'resetCar',
            payload: ''
        }

        dispatchClothe( action );

        navigate('/purchase');
    }

    const getTotalPrice = () => {

        let totalPrice = 0;
        for(let i = 0; i < clotheState.length; i++)
        {
            if(clotheState[i].isInCar)
            totalPrice += clotheState[i].price;
        }

        return totalPrice;
    }

    return (
        <>
            <div className="main-container-checkout-screen">
                <div className="container-checkout-screen">
                    
                    <div className="container-input-data-product">
                        {
                            /*
                        <InputsCheckout inputsValues={ inputsValues } checkInputs={ checkInputs } />
                            */
                        }
                        <p className="tag-date-delivery">Fecha de entrega</p>
                        <div className="container-info-date-delivery">
                            <p className="text-date-delivery">Tu producto llega el 2 de diciembre de 1998</p>
                        </div>


                        <p className="tag-date-delivery">Productos</p>
                        {
                            products === 'products' ? 
                            (
                                <>
                                    {
                                        clotheState.map( (clothe, index) => {
                                            if(clothe.isInCar)
                                            {
                                                return(
                                                    <CheckoutProductCard key={ index } clothe={ clothe } />
                                                )
                                            }
                                            else{
                                                <>
                                                </>
                                            }
                                        })
                                    }
                                </>
                            )
                            :
                            (
                                <CheckoutProductCard clothe={ clotheState[products] } />
                            )
                        }

                        <div className="container-total-price">
                            <p className="total-price-tag">Total a pagar: </p>
                            {
                                products === 'products' ? 
                                (
                                    <p className="total-price">${getTotalPrice()}</p>
                                )
                                :
                                (
                                    <p className="total-price">${clotheState[products].price}</p>
                                )
                            }
                        </div>


                        <div className="container-continue-button">
                            <button 
                                className="continuer-button"
                                onClick={ goBuyScreen }
                            >
                                Comprar
                            </button>
                        </div>
                    </div>

                    {
                        /*
                            <div className="container-data-purshace">
                        
                            </div>
                        */
                    }

                </div>
            </div>
        </>
    )
}

export default CheckoutScreen
