import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";


class CartCheckout extends React.Component {
  
    handleCheckout = () => {
        console.log("Check")
        this.props.handleCheckout();
        // if (Object.keys(this.props.user).length === 0) {
        //     const btnLogin = document.getElementById("btn-login");
        //     btnLogin.click();
        //     toast.warn("Need to login to checkout")
        // } else if (!(this.props.infomation.address || this.props.infomation.phoneNumber)) {
        //     toast.warn("Need to enter phone number and address to checkout")
        // } else {
        //     this.props.handleCheckout();
        // }


    }

    render() {

        let { subTotal, itemNumber, shipping } = this.props;
        let total = subTotal + shipping;
        subTotal = subTotal.toFixed(2);
        shipping = shipping.toFixed(2);
        total = total.toFixed(2);
        return (
            <>
                

                <div className="checkout-box">
                    <div className="checkout-box__container">
                        <div className="checkout-box__list-details-box">
                            <div className="checkout-box__detail-box">
                                <h1 className="checkout-box__detail-title">Subtotal</h1>
                                <h1 className="checkout-box__price">${subTotal}<p className="checkout-box__price--unit">USD</p></h1>
                            </div>
                            <div className="checkout-box__detail-box">
                                <h1 className="checkout-box__detail-title">Shipping</h1>
                                <h1 className="checkout-box__price">${shipping} <p className="checkout-box__price--unit">USD</p></h1>
                            </div>
                            <div className="checkout-box__detail-box">
                                <h1 className="checkout-box__detail-title">Bag Total</h1>
                                <h1 className="checkout-box__price"><p className="checkout-box__price--quantily">({itemNumber} items)</p> ${total} <p className="checkout-box__price--unit">USD</p></h1>
                            </div>
                        </div>
                        <button onClick={() => this.handleCheckout()} className="checkout-box__btn">Proceed To Checkout</button>
                    </div>
                </div>
            </>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        infomation: state.infomation
    }
}

export default connect(mapStateToProps)(CartCheckout);

