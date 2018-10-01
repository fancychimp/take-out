import React from 'react';

class Dish extends React.Component {
    render() {
        const { name, image, desc, price, status } = this.props.details;
        return (
            <li className="dish-menu">
                <img src={image} alt={name} />
                <h3 className="dish-name">
                    {name}
                </h3>
            </li>
        );
    }
}

export default Dish;