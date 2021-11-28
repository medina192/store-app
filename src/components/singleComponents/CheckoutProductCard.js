import React from 'react';
import '../../layouts/singleComponents/checkoutProductCard.css'

const CheckoutProductCard = ({ clothe }) => {
    return (
        <div className="container-card">
            <div className="container-image-name">
                <div style={{ backgroundImage: `url('${clothe.url}')`}} className="image">
                </div>
                <p className="name">{ clothe.clotheName }</p>
            </div>
            <p className=" price">${ clothe.price }</p>
        </div>
    )
}

export default CheckoutProductCard
