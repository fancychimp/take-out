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
        order[key] = this.props.location.state.order[key] + 1;
        this.setState({ order });
        this.renderMyOrder()
    };

    removeDishFromOrder = (key) => {
        const order = this.props.location.state.order;
        if (order[key] === 1) {
            order[key] = this.props.location.state.order[key].delete;
        } else {
            order[key] = this.props.location.state.order[key] - 1;
        }
        this.setState({ order });
        this.renderMyOrder()
    };


    render() {
            // Only render the items if there is anything to render
            if (Object.keys(this.props.location.state.order).length > 0) {
                return (
                    <div>
                        <div className="menu">
                            <Header tagline="Create your feeding experience"/>
                        </div>
                        <p className="cart-tagline">My Food Cart</p>
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
                    </div>
                )
            } else {
                return (
                    <div>
                        <div className="menu">
                            <Header tagline="Create your feeding experience"/>
                        </div>
                        <p className="cart-tagline">My Food Cart</p>
                        <p>There's nothing in your cart yet.</p>
                        <button>Click here to see today's dishes</button>
                    </div>
                )
            }
    }
};

export default ShoppingCart;