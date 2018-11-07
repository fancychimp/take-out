import React from 'react';
import Header from './Header';

class Payment extends React.Component {

    render() {
        return (
            <div>
                <div className="menu">
                        <Header tagline="Create your feeding experience"/>
                 </div>
                 <p className="cart-tagline">Payment</p>
                 <p>Your total is </p>
            </div>
        )
    }
};

export default Payment;