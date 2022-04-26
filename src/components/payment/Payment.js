import React from "react";
import qrcode from '../../assets/images/qrcode.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMoneyCheckDollar, faIdCard, faCartShopping, faArrowLeft, faQrcode } from '@fortawesome/free-solid-svg-icons'
import Countdown from 'react-countdown';
class Payment extends React.Component {
    
    HandleBackPayment = () => {
        this.props.onBackPayment()
    }
    renderCountdown = ({ completed, formatted }) => {
    
        (completed && setTimeout(() => this.HandleBackPayment(), 2000))
        return completed ? <>Time out unable to pay</> : <>{formatted.minutes}:{formatted.seconds} </>;
    }
    checkOut = () =>{
        this.props.onCheckout();
    }

    render() {

        const { timeCountdown, total, infomation ,orderID} = this.props
        console.log(">>> Check props : ",)
        return (
            <div className="payment">
                <div className="payment-box">
                    <div className="payment-infomation">
                        <div className="payment-infomation__item">
                            <div className="infomation-item__name infomation-item__name--big">
                                <FontAwesomeIcon className="infomation-item__icon infomation-item__icon--big" icon={faClock} />
                                Orders will expire later
                            </div>
                            <div className="infomation-item__value infomation-item__value--big">
                                <Countdown date={Date.now() + timeCountdown} renderer={this.renderCountdown} />
                            </div>
                        </div>
                        <div className="payment-infomation__item">
                            <div className="infomation-item__name">
                                <FontAwesomeIcon className="infomation-item__icon" icon={faMoneyCheckDollar} />
                                Total
                            </div>
                            <div className="infomation-item__value">{total}$</div>
                        </div>
                        <div className="payment-infomation__item">
                            <div className="infomation-item__name">
                                <FontAwesomeIcon className="infomation-item__icon" icon={faIdCard} />
                                Infomation
                            </div>
                            <div className="infomation-item__value">{infomation}</div>
                        </div>

                        <div className="payment-infomation__item">
                            <div className="infomation-item__name">
                                <FontAwesomeIcon className="infomation-item__icon" icon={faCartShopping} />
                                Order ID
                            </div>
                            <div className="infomation-item__value">{orderID}</div>
                        </div>
                        <div className="action-box">
                            <div className="action-item" onClick={this.HandleBackPayment}>
                                <FontAwesomeIcon className="action-item__icon" icon={faArrowLeft} />
                                Back</div>
                        </div>
                    </div>
                    <div className="payment-main">
                        <div className="payment-logo__box">
                            <div className="payment-logo__logo">
                                MiniStore
                            </div>

                        </div>
                        <div className="payment-container">
                            <div className="payment-container__title">Scan QR</div>
                            <div className="payment-container__qr">
                                <img onClick={this.checkOut} className="img-responsive" src={qrcode} alt="QR Code" />
                            </div>
                            <div className="payment-container__intruction">
                                <FontAwesomeIcon className="payment-container__icon" icon={faQrcode} />
                                Use your phone to scan the QR Code
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Payment