import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers'

class Dish extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            desc: PropTypes.string,
            price: PropTypes.number,
            status: PropTypes.string
        }),
        addDishToOrder: PropTypes.func
    };

    render() {
        const { name, image, desc, price } = this.props.details;
        return (
            <li className="dish-menu">
                <h3 className="dish-name">
                    {name}
                </h3>
                <img src={image} alt={name} />
                <div className="dish-desc">
                    {desc}
                </div>
                <div className="dish-price">
                    {formatPrice(price)}
                </div>
                <div className="button" onClick={ () => this.props.addDishToOrder(this.props.index) }>
                    <p className="btnText">Add to Order</p>
                </div>
            </li>
        );
    }
}

export default Dish;