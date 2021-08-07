import React from "react";
import cn from "classnames";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./item/CartItem";
import {
  removeSneakersToCart,
  removeSneakersAllToCart,
} from "../redux/action/cart";
import emptyCart from "./../accets/img/empty-cart.jpg";
import Button from "./Button";
import { BsX } from "react-icons/bs";
import { addToOrders } from "../redux/action/orders";
import orderDone from '../accets/img/order-done.png';


const Cart = ({ active, close, placedOrder, addOrder }) => {
  const dispatch = useDispatch();
  const { totalPrice, cartItems } = useSelector(({ cart }) => cart);
  const { orderNumber } = useSelector(({ orders }) => orders);
  const [stateCartItem, setCartItem] = useState([]);

  useEffect(() => {
    const arr = Object.values(cartItems);
    if (arr.length) {
      const res = arr.map((item) => item);
      setCartItem(res);
    } else {
      setCartItem([]);
    }
  }, [cartItems]);

  const deleteItem = (id) => {
    if (window.confirm("Вы подтверждаете удаление?")) {
      dispatch(removeSneakersToCart(id));
    }
  };

  const setOrder = () => {
    addOrder();
    dispatch(addToOrders(Object.values(cartItems)));
    dispatch(removeSneakersAllToCart());
  };


  return (
    <div className={cn("cart", { active: active })}>
      <div className="cart_title">
        <h2>Корзина</h2>
        <i className="cart_close" onClick={close}>
          <BsX />
        </i>
      </div>

      {placedOrder ? (
        <div className="empty order">
          <img src={orderDone} alt="Заказ оформлен" />
          <h3>Заказ оформлен!</h3>
          <span>Ваш заказ #{orderNumber} скоро будет передан курьерской доставке</span>
          <Button children="Вернуться назад" left onClick={close} />
        </div>
      ) : (
        <>
          {stateCartItem.length ? (
            <div className="cart-info">
              <div style={{ overflowY: "auto" }}>
                {stateCartItem.map((obj) => (
                  <CartItem key={obj.id} obj={obj} deleteItem={deleteItem} />
                ))}
              </div>
              <div>
                <div className="info_choose">
                  <p>Итого:</p>
                  <p>{totalPrice} руб.</p>
                </div>
                <Button children="Оформить заказ" right onClick={setOrder} />
              </div>
            </div>
          ) : (
            <div className="empty">
              <img className="empty-img" src={emptyCart} alt="Корзина пуста" />
              <h2>Корзина пустая</h2>
              <span>
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </span>
              <Button children="Вернуться назад" onClick={close} left />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
