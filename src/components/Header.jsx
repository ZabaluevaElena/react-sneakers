import React from "react";
import {Link} from 'react-router-dom';
import cart from '../accets/img/cart.svg'
import heart from '../accets/img/heart.svg'
import user from '../accets/img/user.svg'
import logo from '../accets/img/logo.png'
import { useSelector } from "react-redux";



const Header = ({openCart}) => {

  const {totalPrice} = useSelector(({cart}) => cart);

  

  return (
    <header className="header">
      <Link to="/" className="header__logo">
          <img width="40" src={logo} alt="Pizza logo" />
          <div className="header__logo-content">
            <h1>REACT SNEAKERS</h1>
            <p>Магазин лучших кроссовок</p>
          </div>
      </Link>
      <ul className="header__menu">
        <li onClick={openCart}><img src={cart} alt="корзина" /><span>{totalPrice} руб.</span></li>
        <li><Link to="/favorites"><img src={heart} alt="корзина" /></Link></li>
        <li><Link to="/orders"><img src={user} alt="корзина" /></Link></li>
      </ul>
    </header>
  );
};

export default Header;

