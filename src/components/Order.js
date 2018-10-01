import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
    static propTypes = {
        loadDishes: PropTypes.func
    };

    render() {
        return (
            <button onClick={ this.props.loadDishes }>
                Click for your dish
            </button>
        )
    };
}

export default Order;