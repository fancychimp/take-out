import React from 'react';
import Header from './Header';
import Dish from './Dish';
import Order from './Order';
import '../css/App.css';
import sampleFood from '../sample-food';

class App extends React.Component {
  state = {
    dishes: {}
  };

  loadDishes = () => {
    this.setState({ dishes: sampleFood })
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
              details={this.state.dishes[key]} 
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
