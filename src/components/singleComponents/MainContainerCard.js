import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { ClotheContext } from '../../context/ClotheContext';

const checkIfIsAddedToCar = (prev, next) => {
    return prev.isInCar !== next.isInCar;      // this not works
}

// with this line return prev.isInCar === next.isInCar;(false = not change) it will execute the console log, but
// it won´t change the html design ( añadido al carrito won´t be changed)


const MainContainerCard = ({ clothe }) => {

    const { dispatchClothe } = useContext( ClotheContext );

    const navigate = useNavigate();

    const goClotheScreen = () => {
        navigate(`/clothe/${clothe.id}`)
    }


    const addItemToCar = () => { 
        
        if(!clothe.isInCar)
        {
            const action = {
                type: 'add',
                payload: clothe
            }
    
            dispatchClothe( action );
        }
    
    }


    return (
        <div className="single-card">
            <div style={{ backgroundImage: `url('${clothe.url}')`}} className="image-single-card">

            </div>
            <div className="container-padding-single-card">
                <h4 className="clothe-name-single">{ clothe.clotheName }</h4>
                <p className="clothe-price-single">${ clothe.price }</p>
                {
                    /*<p className="clothe-price-shipping-single">{ clothe.ShippingCost }</p> */
                }
                <div className="container-single-buttons">
                    <button
                        className="single-button-add-car"
                        onClick= { addItemToCar }
                    >
                        
                        {
                            clothe.isInCar ? 
                            (
                                <p>Añadido al carrito</p>
                            )
                            :
                            (
                                <p>Agregar al carrito</p>
                            )
                        }
                        </button>

                    <button
                        onClick={ goClotheScreen }
                        className="single-button-buy"
                    >Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(MainContainerCard, checkIfIsAddedToCar)
