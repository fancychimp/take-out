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

    onClick = () => {
        this.props.loadDishes()
        this.handleHideLoadDishButton()
    };

    render() {
        return (
            <div>
                <button style={this.state.hideLoadDishButton ? { display: 'none' } : {}} onClick={ this.onClick }>
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