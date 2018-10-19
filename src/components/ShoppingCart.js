import React from 'react';
import Header from './Header';
import CartItem from './CartItem';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
    state = {
        dishes: {},
        order: {}
    };

    static propTypes = {
        dishes: PropTypes.object,
        order: PropTypes.object
    };

    render() {
        return (
            <div>
                <div className="menu">
                    <Header tagline="Create your feeding experience"/>
                </div>
                <p className="cart-tagline">My Food Cart</p>
                <ul>
                    {Object.keys(this.props.location.state.order).map(key => (
                        <CartItem
                            key={key}
                            item_count={this.props.location.state.order[key]}
                            item_details={this.props.location.state.dishes[key]}
                        />
                    ))}
                </ul>
            </div>
        )
    }
};

export default ShoppingCart;