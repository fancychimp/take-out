import React from 'react';
import Header from './Header';
// import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {

    render() {
        return (
            <div>
                <div className="menu">
                    <Header tagline="Create your feeding experience"/>
                </div>
                <p className="cart-tagline">My Food Cart</p>
                {Object.keys(this.props.location.state.order).map(key => (
                        key=this.props.location.state.dishes[key],
                        <ul>
                            <li className="added-dish">
                                <p className="added-dish-name">{key.name} <img src={key.added_image} className="added-dish-image"  alt={key.name} /></p>
                            </li>
                            <li>
                                {key.price}
                            </li>
                        </ul>
                ))}
            </div>
        )
    }
};

export default ShoppingCart;