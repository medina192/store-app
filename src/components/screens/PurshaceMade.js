import React from 'react';
import '../../layouts/screens/purshaceMade.css';
import { FaClipboardCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const PurshaceMade = () => {

    const navigate = useNavigate();

    const returnHome = () => {
        navigate('/');
    }

    return (
        <div className="background-purshace-screen">
            <div className="card-purshace-made">
                <FaClipboardCheck className="iconPurchase" />
                <p className="congratulations-message">
                    Felicidades¡, tu compra ha sido realizada exitosamente
                </p>
                <p className="notification-message">
                    Te notificaremos cuando tu pedido sea entregado
                </p>
                <button
                onClick={ returnHome }
                    className="button-return-home"
                >
                    Ir a la pantalla principal
                </button>
            </div>
            
        </div>
    )
}

export default PurshaceMade
