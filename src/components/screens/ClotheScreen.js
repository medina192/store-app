import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import { ClotheContext } from '../../context/ClotheContext'
import NotFoundPage from './NotFoundPage';
import { useNavigate } from "react-router-dom";

const ClotheScreen = () => {

    const { clotheState, dispatchClothe  } = useContext( ClotheContext );

    let navigate = useNavigate();

    const { id } = useParams();
    const clothe = clotheState[id];

    const goCheckout = () => {
        navigate(`/checkout/${id}`)
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
        <>
            {
                clothe !== undefined ?
                (
                    <div className="container-clothe-screen">
                        <div className="container-full-card">
                            <div style={{ backgroundImage: `url('${clothe.url}')`}}
                                 className="container-full-card-image">

                            </div>
                            <div className="container-data-full-card">
                                <h3 className="full-clothe-name">{ clothe.clotheName }</h3>
                                <p className="full-clothe-price">${ clothe.price }</p>

                                <p className="full-clothe-shipcost-tag">Costo de envío:</p>
                                <p className={ clothe.ShippingCost === 'Gratis'
                                  ? 'full-clothe-shipcost' : 'full-clothe-shipcost-free'   }>
                                    { clothe.ShippingCost}</p>

                                <p className="full-clothe-stock-tag">En stock:</p>
                                <p className="full-clothe-stock">{ clothe.stock }</p>
                                
                                <p className="full-clothe-description">{ clothe.description }</p>
                                <div className="container-full-buttons">
                                    <button
                                        className="full-button-add-car"
                                        onClick={ addItemToCar }
                                    >
                                        {clothe.isInCar ? 'Añadido al carrito' : 'Agregar al carrito'}
                                    </button>

                                    <button
                                        onClick={ goCheckout }
                                        className="full-button-buy"
                                    >Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                :
                (
                    <NotFoundPage />
                )
            }
        </>
    )
}

export default ClotheScreen
