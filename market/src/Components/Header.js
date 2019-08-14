import React from 'react';
import {Link} from 'react-router-dom';

import cartContext from '../CartContext/CartContext';

const Header = props => {
    return (
      <header className="first-box">
        <h1>Amazon2</h1>
        <div className="cart">
          <Link to="/cart">
            {" "}
            <img
              src="https://static.thenounproject.com/png/22665-200.png"
              alt=""
            />{" "}
          </Link>
          <cartContext.Consumer>
            {context => {
              return <div className="product-counter">{context.counter}</div>;
            }}
          </cartContext.Consumer>
        </div>
      </header>
    );
  };

export default Header;