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

    // componentDidMount() {
    //     // first reinstate our localStorage
    //     const order = this.props.history.location.state.order;
    //     const localStorageRef = localStorage.getItem(this.props.history.location.state.order);
    //     // console.log(this.props.history.location.state.order)
    //     if (localStorageRef) {
    //       this.setState({ order: JSON.parse(localStorageRef)});
    //     }
    //     this.setState({ order:  order});
    //     console.log(JSON.parse(localStorageRef))
    //     console.log(this.props.location.state.order)
    //     // this.ref = base.syncState(`${params.storeId}/fishes`, {
    //     //   context: this,
    //     //   state: "fishes"
    //     // });
    //   }
    
    //   componentDidUpdate() {
    //     localStorage.setItem(
    //       this.props.history.location.state.order,
    //       JSON.stringify(this.props.history.location.state.order)
    //     );
    //   }
    
    //   componentWillUnmount() {
    //     // base.removeBinding(this.ref);
    //   }

    renderMyOrder = () => {
        this.props.history.push({
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
                                renderMyOrder={this.renderMyOrder}

                            />  : ''

                        ))}
                    </ul>
                </div>
            )
    }
};

export default ShoppingCart;