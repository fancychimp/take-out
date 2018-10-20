import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers'

class CartItem extends React.Component {
    static propTypes = {
        item_details: PropTypes.object,
        item_count: PropTypes.number,
        addDishToOrder: PropTypes.func
    };

    render() {
        const { name, added_image, price } = this.props.item_details;
        return (
            <div>
                <p className="added-dish added-dish-name"> {name} <img className="added-dish-image" src={added_image} alt={name} /> </p>

                <p className="dish-price"> <span className="count">{this.props.item_count}</span> {formatPrice(this.props.item_count * price)} </p>

                <div className="button" onClick={ () => this.props.addDishToOrder(this.props.index) }>
                    <p className="btnText">Add to Order?</p>
                </div>
            </div>

        )
    }
};

export default CartItem;