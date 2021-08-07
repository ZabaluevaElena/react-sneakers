import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemElement from "../components/item/ItemElement";
import { removePersonFromFavorites } from "../redux/action/favorite";
import { BsChevronLeft } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { addSneakersToCart, removeSneakersToCart } from "../redux/action/cart";
import emogi from "../accets/img/imogi.png";
import Button from "../components/Button";

const Favorites = () => {
  const [favorItem, setFavorItem] = useState([]);
  const favorite = useSelector(({ favorite }) => favorite);
  const { cartItems } = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  const dispatchFavoritePeople = (personFavorite, obj) => {
    if (window.confirm("Вы подтверждаете удаление?")) {
      dispatch(removePersonFromFavorites(obj.id));
    }
  };

  const dispatchCart = (cart, obj) => {
    if (cart) {
      dispatch(removeSneakersToCart(obj.id));
    } else {
      dispatch(addSneakersToCart(obj));
    }
  };

  useEffect(() => {
    const arr = Object.values(favorite);
    if (arr.length) {
      const res = arr.map((item) => item);
      setFavorItem(res);
    } else {
      setFavorItem([]);
    }
  }, [favorite]);

  const history = useHistory();

  const handleGoBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <div>
      {favorItem.length ? (
        <div className="catalog__content start">
          <div className="page-title">
            <span onClick={handleGoBack}>
              <BsChevronLeft />
            </span>
            <h2>Мои закладки</h2>
          </div>
          {favorItem.map((obj) => (
            <ItemElement
              key={obj.id}
              obj={obj}
              price={obj.price}
              personFavorite={true}
              dispatchFavoritePeople={dispatchFavoritePeople}
              cart={Object.keys(cartItems).some((elem) => elem == obj.id)}
              dispatchCart={dispatchCart}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <img src={emogi} />
          <h2>Закладок нет :(</h2>
          <span>Вы ничего не добавили в закладки</span>
          <Button children="Вернуться назад" left onClick={handleGoBack} />
        </div>
      )}
    </div>
  );
};

export default Favorites;
