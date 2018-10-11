import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
    static propTypes = {
        loadDishes: PropTypes.func,
        goToMyOrder: PropTypes.func
    };

    state = {
        hideLoadDishButton: false
    }

    handleHideLoadDishButton = () => {
        this.setState({ hideLoadDishButton: true })
    }

    onLoadDishClick = () => {
        this.props.loadDishes()
        this.handleHideLoadDishButton()
    };

    render() {
        const styleLoadDishButton = this.state.hideLoadDishButton ? { display: 'none' } : {}

        return (
            <div>
                <button style={styleLoadDishButton} onClick={ this.onLoadDishClick }>
                    See Today's Dishes
                </button>
                <button onClick={ this.props.goToMyOrder }>
                    My Order
                </button>
            </div>
        )
    };
}

export default Order;