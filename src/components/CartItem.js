import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers'

class CartItem extends React.Component {
    render() {
        return (
            <div>
                {console.log(this.props.location.state.order)}
                <p className="added-dish-name">{this.props.location.state.order} <img src={this.props.location.state.order} className="added-dish-image"  alt={this.props.location.state.order} /></p>
            </div>
        )
    }
};

export default CartItem;