import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers'

class ShoppingCart extends React.Component {
    static propTypes = {
        dishes: PropTypes.object,
        order: PropTypes.object
    };

    render() {
        return (
            <div>
                <div className="menu">
                    <Header tagline="Create your feeding experience"/>
                </div>
                <p className="cart-tagline">My Food Cart</p>
                {Object.keys(this.props.location.state.order).map(key => (
                        // console.log(count[dish]),
                        // console.log(count),
                        
                        key=this.props.location.state.dishes[key],

                        <CartItem dish={this.props.location.state.dishes[key]}></CartItem>
                        // count=this.count[dish],
                        // console.log(count[dish]),
                        // console.log(this.props.location.state.order.dish1),
                        // Object.keys(this.props.location.state.order).map(dish => (dish=this.props.location.state.order[dish], <p className="dish-count"> {dish} </p>)),

                        <ul key={key.name}>
                            <li className="added-dish">
                                <p className="added-dish-name">{key.name} <img src={key.added_image} className="added-dish-image"  alt={key.name} /></p>
                                {Object.keys(this.props.location.state.order).map(dish => (dish=this.props.location.state.order[dish], <p className="dish-count"> {dish} </p>))}
                                
                                <p> {formatPrice(key.price)} </p>
                            </li>
                            {/* {Object.keys(this.props.location.state.order).map(dish => (dish=this.props.location.state.order[dish], <p className="dish-count"> {dish} </p>))} */}
                        </ul>
                ))}
            </div>
        )
    }
};

export default ShoppingCart;