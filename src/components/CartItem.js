import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers'

class CartItem extends React.Component {
    static propTypes = {
        item_details: PropTypes.object,
        item_count: PropTypes.number,
        addDishToOrder: PropTypes.func,
        removeDishFromOrder: PropTypes.func
    };

    render() {
        const { name, added_image, price } = this.props.item_details;
        return (
            <div>
                <p className="added-dish added-dish-name"> {name} <img className="added-dish-image" src={added_image} alt={name} /> </p>
                <div className="dish">
                <p className="dish-price"> <span className="count">{this.props.item_count}</span> {formatPrice(this.props.item_count * price)} </p>

                <div className="shopping-cart-btn" onClick={ () => this.props.addDishToOrder(this.props.index) }>
                    <p className="btnText">Add another</p>
                </div>
                <div className="shopping-cart-btn" onClick={ () => this.props.removeDishFromOrder(this.props.index) }>
                    <p className="btnText">Remove dish</p>
                </div>
                </div>
            </div>

        )
    }
};

export default CartItem;