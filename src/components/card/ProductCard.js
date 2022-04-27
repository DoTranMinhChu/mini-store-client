import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { AddCart } from '../../stores/actions/carts';

function ProductCard(props) {

    const [product] = useState(props.product)

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(AddCart(product));
    }

    return (
        <>
            <div className="card-product">
                <div className="card-product__content">
                    <div className="card-product__image-box">
                        <img className="img-responsive" src={product.image} alt="img" />
                    </div>
                    <div className="card-product__infomation-box">
                        <div className="card-product__infomation">
                            <h2 className="card-product__product-name">{product.name}</h2>
                            <h5 className="card-product__product-type">{product.type}</h5>
                        </div>

                        <div className="card-product__cart-box">
                            <h1 className="card-product__product-price">${product.price}</h1>
                            <div className="card-product__cart-buy" onClick={handleAddToCart}>
                                <FontAwesomeIcon icon={faCartArrowDown} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default ProductCard;