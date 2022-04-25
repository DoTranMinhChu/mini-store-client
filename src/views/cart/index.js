import CartCard from "../../components/card/CartCard";
import CartCheckout from "../../components/card/CartCheckout";
import Payment from "../../components/payment/Payment";
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { RemoveProductToCart, IncreaseQuantityProduct, DecreaseQuantityProduct } from "../../stores/actions/carts";

function Cart() {


    const [isPayment, setIsPayment] = useState(false)
    const [cartsList, setCartsList] = useState({})

    const dispatch = useDispatch();

    useEffect(() => {
        setCartsList(carts)
    })
    const carts = useSelector((state) => state.carts.carts)

    const handleRemoveProductToCart = (product) => {
        dispatch(RemoveProductToCart(product))
    }
    const handleChangeQuantity = (product, number) => {

        if (number === 1) {
            dispatch(IncreaseQuantityProduct(product));

        }
        else if (number === -1) {
            dispatch(DecreaseQuantityProduct(product));
        }
        setCartsList({ ...carts })

    }

    const handleOpenCheckout = () => {
        setIsPayment(true)
    }
    const handleCheckout = () => {
        // dispatch()
        this.props.Checkout();
        setIsPayment(false)
    }
    const handleBackPayment = () => {
        setIsPayment(false)
    }
    let total = 0
    let subTotal = 0
    let shipping = 4.99
    let itemNumber = 0
    const infomationShip = 'Chu'
    // const infomationShip = `Order value: ${total} $ 
    // | Address: ${this.props.infomation.address} 
    // | Phone Number: ${this.props.infomation.phoneNumber}  
    // | Consignee: ${this.props.infomation.fullName}`;



    return (
        !cartsList.length ?
            <>
                <div className="notification">Cart is empty</div>
            </>
            :
            <>

                < div className="cart" >
                    <div className="cart__cart-list">
                        {cartsList.map((product) => {
                            subTotal += product.price * product.quantity;
                            itemNumber += product.quantity;
                            total=subTotal+shipping;
                            return (
                                <CartCard
                                    key={product._id}
                                    product={product}
                                    handleRemoveProductToCart={handleRemoveProductToCart}
                                    handleChangeQuantity={handleChangeQuantity} />
                            )
                        })}


                    </div>
                    <div className="cart__checkout">
                        <CartCheckout
                            handleCheckout={handleOpenCheckout}
                            subTotal={subTotal}
                            shipping={shipping}
                            itemNumber={itemNumber} />
                    </div>
                </div >
                {
                    isPayment &&
                    <Payment
                        onCheckout={handleCheckout}
                        onBackPayment={handleBackPayment}
                        timeCountdown={600000}
                        total={total}
                        infomation={infomationShip}
                        orderID={Math.floor(Math.random() * 1000000)}
                    />
                }
            </>

    )
}
export default Cart;
