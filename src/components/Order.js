import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
    static propTypes = {
        loadDishes: PropTypes.func,
        goToMyOrder: PropTypes.func
    };

    state = {
        hideLoadDishButton: false,
        hideMyOrderButton: true
    }

    handleHideLoadDishButton = () => {
        this.setState({ hideLoadDishButton: true })
    }

    handleHideMyOrderButton = () => {
        this.setState({ hideMyOrderButton: false })
    }

    onLoadDishClick = () => {
        this.props.loadDishes()
        this.handleHideLoadDishButton()
        this.handleHideMyOrderButton()
    };

    render() {
        const styleLoadDishButton = this.state.hideLoadDishButton ? { display: 'none' } : {}
        const styleMyOrderButton = this.state.hideLoadDishButton ? {} : { display: 'none' }

        return (
            <div>
                <button className="load-dishes btnText" style={styleLoadDishButton} onClick={ this.onLoadDishClick }>
                    <span> See Today's Dishes </span>
                </button>
                <button className="my-order btnText" style={styleMyOrderButton} onClick={ this.props.goToMyOrder }>
                    Checkout
                </button>
            </div>
        )
    };
}

export default Order;