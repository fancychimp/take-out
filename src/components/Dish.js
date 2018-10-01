import React from 'react';

class Dish extends React.Component {
    render() {
        const { name, image, desc, price, status } = this.props.details;
        return (
            <li className="dish-menu">
                <h3 className="dish-name">
                    {name}
                </h3>
                <img src={image} alt={name} />
                <div className="dish-desc">
                    {desc}
                </div>
            </li>
        );
    }
}

export default Dish;