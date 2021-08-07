import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSneakersToCart,
  removeSneakersToCart,
} from "../../redux/action/cart";
import {
  removePersonFromFavorites,
  setPersonToFavorite,
} from "../../redux/action/favorite";
import ItemElement from "./ItemElement";

const ItemElementContainer = ({ obj }) => {
  const favorite = useSelector(({ favorite }) => favorite);

  const { cartItems } = useSelector(({ cart }) => cart);
  const [personFavorite, setPersonFavorite] = useState(
    Object.keys(favorite).some((elem) => elem == obj.id)
  );

  const cart = Object.keys(cartItems).some((elem) => elem == obj.id);

  const dispatch = useDispatch();
  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorites(obj.id));
      setPersonFavorite(false);
    } else {
      setPersonFavorite(true);
      dispatch(
        setPersonToFavorite({
          [obj.id]: {
            id: obj.id,
            title: obj.title,
            imageUrl: obj.imageUrl,
            price: obj.price,
          },
        })
      );
    }
  };

  const dispatchCart = () => {
    if (!cart) {
      dispatch(addSneakersToCart(obj));
    } else {
      dispatch(removeSneakersToCart(obj.id));
    }
  };

 
  return (
    <ItemElement
      obj={obj}
      dispatchCart={dispatchCart}
      dispatchFavoritePeople={dispatchFavoritePeople}
      personFavorite={personFavorite}
      cart={cart}
    />
  );
};

export default ItemElementContainer;
