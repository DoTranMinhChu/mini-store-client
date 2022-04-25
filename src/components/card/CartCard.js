import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle, faRemove } from '@fortawesome/free-solid-svg-icons'


class CartCard extends React.Component {
    state = {
        product: this.props.product
    }
    handleRemoveProductToCart = () => {
        const { product } = this.props;
        this.props.handleRemoveProductToCart(product)
    }
    handleChangeQuantity = (number) => {
        const { product } = this.props;
        this.props.handleChangeQuantity(product, number);
    }
    render() {
        const { product } = this.state;
        return (
            <>
                <div className="cart-card">
                    <FontAwesomeIcon onClick={() => this.handleRemoveProductToCart()} className="cart-card__btn-remove" icon={faRemove} />
                    <div className="cart-card__image-box">
                        <img className="img-responsive" src={product.image} alt="" />
                    </div>
                    <div className="cart-card__infomation-box">
                        <div className="cart-card__infomation">
                            <h2 className="cart-card__product-name">{product.name}</h2>
                            <h5 className="cart-card__product-size">Size: {product.size}</h5>
                        </div>

                        <div className="cart-card__cart-box">
                            <h1 className="cart-card__product-price">${product.price}</h1>
                            <div className="cart-card__quantity-box">
                                <FontAwesomeIcon onClick={() => this.handleChangeQuantity(-1)} className="cart-card__quantity-box--minus" icon={faMinusCircle} />
                                <h1 className="cart-card__quantity">{product.quantity}</h1>
                                <FontAwesomeIcon onClick={() => this.handleChangeQuantity(+1)} className="cart-card__quantity-box--plus" icon={faPlusCircle} />
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CartCard;
