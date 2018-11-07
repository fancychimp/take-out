import React from 'react';
import Header from './Header';
import CartItem from './CartItem';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers'

class ShoppingCart extends React.Component {
    state = {
        dishes: {},
        order: {}
    };

    static propTypes = {
        dishes: PropTypes.object,
        order: PropTypes.object
    };


    renderMyOrder = () => {
        this.props.history.replace({
          pathname: '/myOrder',
          state: { 
            order: this.props.location.state.order,
            dishes: this.props.location.state.dishes
          }
        })
    }

    addDishToOrder = (key) => {
        const order = this.props.location.state.order;
        order[key] += 1;
        this.setState({ order });
        this.renderMyOrder()
    };

    removeDishFromOrder = (key) => {
        const order = this.props.location.state.order;
        if (order[key] === 1) {
            delete order[key];
        } else {
            order[key] -= 1;
        }
        this.setState({ order });
        this.renderMyOrder()
    };


    goToDishes = () => {
        this.props.history.push({
          pathname: '/',
          state: {
            order: this.state.order,
            dishes: this.state.dishes
          }
        })
    };


    render() {
        const orderIds = Object.keys(this.props.location.state.order)
        console.log(orderIds)
        const total = orderIds.reduce((prevTotal, key) => {
            const dish = this.props.location.state.dishes[key];
            const count = this.props.location.state.order[key];
            return prevTotal + count * dish.price;
        }, 0);
        console.log(total)
        // Only render the items if there is anything to render
        if (Object.keys(this.props.location.state.order).length > 0) {
            return (
                <div>
                    <div className="menu">
                        <Header tagline="Create your feeding experience"/>
                    </div>
                    <p className="cart-tagline">Order summary</p>
                    <ul>
                        {Object.keys(this.props.location.state.order).map(key => (
                            // Do not render the item if it has a 0 count
                            this.props.location.state.order[key] >= 1 ?
                            <CartItem
                                key={key}
                                index={key}
                                item_count={this.props.location.state.order[key]}
                                item_details={this.props.location.state.dishes[key]}
                                addDishToOrder={this.addDishToOrder}
                                removeDishFromOrder={this.removeDishFromOrder}
                                renderMyOrder={this.renderMyOrder}
                            />  : ''
                        ))}
                    </ul>
                    <div className="total">
                        Total:  {formatPrice(total)}
                    </div>
                    <div onClick={this.handlePayButton}>
                        <p className="shopping-cart-btn pay-order btnText">Pay for order</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="menu">
                        <Header tagline="Create your feeding experience"/>
                    </div>
                    <p className="cart-tagline">Order summary</p>
                    <p className="empty-tagline">There's nothing in your cart yet.</p>
                    <button className="empty-dishes btnText" onClick={this.goToDishes}>Go Back</button>
                </div>
            )
        }
    }
};

export default ShoppingCart;