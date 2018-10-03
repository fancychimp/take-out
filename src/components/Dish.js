import React from 'react';
import PropTypes from 'prop-types';

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
        const { name, image, desc, price, status } = this.props.details;
        return (
            <li className="dish-menu">
                <h3 className="dish-name">
                    {name}
                </h3>
                <img src={image} alt={name} />
                <div className="dish-desc">
                    {desc}
                </div>
                <button onClick={ () => this.props.addDishToOrder(this.props.index) }>
                    Add to Order
                </button>
            </li>
        );
    }
}

export default Dish;