import React from 'react';
import Header from './Header';
import CartItem from './CartItem';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
    state = {
        dishes: {},
        order: {}
    };

    static propTypes = {
        dishes: PropTypes.object,
        order: PropTypes.object
    };

    addDishToOrder = (key) => {
        const order = this.props.location.state.order;
        order[key] = this.props.location.state.order[key] + 1;
        this.setState({ order });
    };

    removeDishFromOrder = (key) => {
        const order = this.props.location.state.order;
        if (order[key] === 1) {
            order[key] = this.props.location.state.order[key].delete;
        } else {
            order[key] = this.props.location.state.order[key] - 1;
        }
        this.setState({ order });
    };


    render() {
            return (
                <div>
                    <div className="menu">
                        <Header tagline="Create your feeding experience"/>
                    </div>
                    <p className="cart-tagline">My Food Cart</p>
                    <ul>
                        {Object.keys(this.props.location.state.order).map(key => (
                            this.props.location.state.order[key] >= 1 ?
                            <CartItem
                                key={key}
                                index={key}
                                item_count={this.props.location.state.order[key]}
                                item_details={this.props.location.state.dishes[key]}
                                addDishToOrder={this.addDishToOrder}
                                removeDishFromOrder={this.removeDishFromOrder}

                            />  : ''

                        ))}
                    </ul>
                </div>
            )
    }
};

export default ShoppingCart;