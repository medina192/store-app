import React, { useRef} from 'react';
import '../../layouts/singleComponents/InputsCheckout.css';

const InputsCheckout = ({ inputsValues, checkInputs }) => {


    const inputsInfo = useRef({
        street: '',
        number: '',
        cp: '',
        city: '',
        state: ''
    })


    const inputChanges = (e) => {

        const name = e.target.name;

        switch (name) {
            case 'street':
                inputsInfo.current[name] = e.target.value;
            break;
            case 'number':
                inputsInfo.current[name] = e.target.value;
            break;
            case 'cp':
                inputsInfo.current[name] = e.target.value;               
            break;
            case 'city':
                inputsInfo.current[name] = e.target.value;               
            break;
            case 'state':
                inputsInfo.current[name] = e.target.value;            
            break;
            default:
                break;
        }
    }

    const verifyInputs = () => {


        for( const inputVal in inputsInfo.current)
        {
            if(inputVal.length > 0)
            {
    
            }
        }
    }

    return (
        <>
            <p className="tag-address-shipping">Domicilio de entrega</p>

            <div className="container-inputs-checkout">

                        
                    <div className="address-container">
                        <div className="street-container-input">
                                <p className="tag-address">Calle</p>
                                <input name="street" onChange={ inputChanges } type="text" className="input-checkout" />
                                <p className="error-input">Debe llenar el campo</p>
                        </div>
                        <div className="number-container-input">
                                <p className="tag-address">Número</p>
                                <input type="text" className="input-checkout" />
                                <p className="error-input">Debe llenar el campo</p>
                        </div>
                    </div>      

                <p className="tag-address">Código postal</p>
                <input type="text" className="input-checkout cp-input" />
                <p className="error-input">Debe llenar el campo</p>

                <div className="city-container">
                        <div className="city-container-input">
                                <p className="tag-address">Ciudad</p>
                                <input type="text" className="input-checkout" />
                                <p className="error-input">Debe llenar el campo</p>
                        </div>
                        <div className="state-container-input">
                                <p className="tag-address">Estado</p>
                                <input type="text" className="input-checkout" />
                                <p className="error-input">Debe llenar el campo</p>
                        </div>
                </div>

                <div className="container-verify-button">
                    <button
                        className="verify-button"
                        onClick={ verifyInputs }
                    >
                        Verificar
                    </button>
                </div>
            </div>   
        </>
    )
}

    /*
                    <div className="address-container-grid">
<p className="tag-address">Calle</p>
<p className="tag-address">Número</p>

<input type="text" className="input-checkout" />
<input type="text" className="input-checkout" />

<p className="error-input">Debe llenar el campo</p>
<p className="error-input">Debe llenar el campo</p>
</div>
    */


export default InputsCheckout
