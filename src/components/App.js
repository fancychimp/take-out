import React from 'react';
import Header from './Header';
import Dish from './Dish';
import Order from './Order';
import PropTypes from 'prop-types';
import '../css/App.css';

const DISHES_ENDPOINT = 'http://localhost:3001/dishes'

class App extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  state = {
    dishes: {},
    order: {}
  };

  loadDishes = () => {
    fetch(DISHES_ENDPOINT).then(response => response.json()).then(sampleFood => {
      this.setState(sampleFood)
    })
  };

  // addDishToOrder = (key) => {
  //   const order = { ...this.state.order };
  //   order[key] = order[key] + 1 || 1;
  //   this.setState({ order });
  // };

  incrementDishCount = (key) => {
    const order = this.state.order;
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  decrementDishCount = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] - 1;
    this.setState({ order });
  };

  goToMyOrder = () => {
    this.props.history.push({
      pathname: '/myOrder',
      state: { 
        order: this.state.order,
        dishes: this.state.dishes
      }
    })
  };

  render() {
    return (
      <div className="take-out">
        <div className="menu">
          <Header tagline="Create your feeding experience"/>
        </div>

        <ul>
          {Object.keys(this.state.dishes).map(key => (
            <Dish
              key={key}
              index={key}
              details={this.state.dishes[key]}
              dishOrder={this.state.order[key]}
              addDishToOrder={this.incrementDishCount}
              incrementDishCount={this.incrementDishCount}
              decrementDishCount={this.decrementDishCount}
            />
          ))}
        </ul>
        <Order
          loadDishes={this.loadDishes}
          goToMyOrder={this.goToMyOrder}
        />
      </div>
    );
  }
}

export default App;
