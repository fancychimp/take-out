import React from 'react';
import Header from './Header';
import Dish from './Dish';
import Order from './Order';
import '../css/App.css';
import sampleFood from '../sample-food';

class App extends React.Component {
  state = {
    dishes: {},
    order: {}
  };

  loadDishes = () => {
    this.setState({ dishes: sampleFood })
  };

  addDishToOrder = (key) => {
    // Take a copy of the current order state
    const order = { ...this.state.order };
    console.log(order);
    //
    order[key] = order[key] + 1 || 1;
    console.log(order[key]);
    // Update state
    this.setState({ order });
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
              addDishToOrder={this.addDishToOrder}
            />
          ))}
        </ul>
        <Order
          loadDishes={this.loadDishes}
        />
      </div>
    );
  }
}

export default App;
