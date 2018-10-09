import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
    static propTypes = {
        loadDishes: PropTypes.func
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
            <button style={this.state.hideLoadDishButton ? { display: 'none' } : {}} onClick={ this.onClick }>
                Click for your dish
            </button>
        )
    };
}

export default Order;