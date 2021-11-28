import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { ClotheContext } from '../../context/ClotheContext';

const CarCard = ({ clothe }) => {

    
    const { dispatchClothe } = useContext( ClotheContext );
    const navigate = useNavigate();

    const removeItemFromCar = () => {

            const action = {
                type: 'remove',
                payload: clothe
            }
    
            dispatchClothe( action );
        
    }

    const buyNow = () => {
        navigate(`/clothe/${clothe.id}`)
    }

    return (
        <div className="car-card">
            <div style={{ backgroundImage: `url('${clothe.url}')`}}  className="image-car-card">
            </div>
            <div className="container-info-card-card">
                <p className="name-car-card">{ clothe.clotheName }</p>
                <div className="container-buttons-car-card">
                    <button 
                        className="button-remove-buy-item"
                        onClick= { removeItemFromCar }    
                    >
                        Eliminar
                    </button>
                    <button 
                        className="button-remove-buy-item"
                        onClick= { buyNow }   
                    >
                        Comprar ahora
                    </button>
                </div>
            </div>
            <div className="container-price-car-card">
                    <p className="price-car-card">${ clothe.price }</p>
            </div>
        </div>
    )
}

export default CarCard
