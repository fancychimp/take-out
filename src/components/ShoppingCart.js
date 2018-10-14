import React from 'react';
import Dish from './Dish';
// import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {

    render() {
        return (
            <div>
                <p>My Food Cart</p>
                {Object.keys(this.props.location.state.order).map(key => (
                        key=this.props.location.state.dishes[key],
                        <ul>
                            <li>
                                {key.image}
                            </li>
                            <li>
                                {key.name}
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