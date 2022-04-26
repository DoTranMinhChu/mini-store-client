import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { useSelector , useDispatch } from "react-redux";

function CartCheckout(props) {
    // const infomationShip = `Order value: ${total} $ 
    // | Address: ${this.props.infomation.address} 
    // | Phone Number: ${this.props.infomation.phoneNumber}  
    // | Consignee: ${this.props.infomation.fullName}`;
    const auth = useSelector(state => state.auth)

    const handleCheckout = () => {
        console.log("Check")
        // props.handleCheckout();
        if (Object.keys(auth.user).length === 0) {
            const btnLogin = document.getElementById("btn-login");
            console.log(btnLogin)
            btnLogin.click();
            console.log("Need to login to checkout")
            // toast.warn("Need to login to checkout")
        } else if (!(auth.infomation.address || auth.infomation.phoneNumber)) {
            console.log("Need to enter phone number and address to checkout")
            // toast.warn("Need to enter phone number and address to checkout")
        } else {
            props.handleCheckout();
        }


    }
    console.log('props : ', props)

    let { subTotal, itemNumber, shipping } = props;
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
                    <button onClick={handleCheckout} className="checkout-box__btn">Proceed To Checkout</button>
                </div>
            </div>
        </>

    )

}


export default CartCheckout;

