import React from "react";
import { BsX } from "react-icons/bs";
import cn from "classnames";

const CartItem = ({ obj, deleteItem }) => {

    let itemPrice =
    obj.price
      .toString()
      .replace(/(^0|[A-Za-zА-Яа-яЁё]|\s)/, "")
      .replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ") + ` руб.`;


  return (
    <div className="item">
      <div className="item-img">
        <img src={obj.imageUrl} alt={obj.title} />
      </div>
      <div className="item-body">
        <div className="item-title">{obj.title}</div>
        <div className="item-price">{itemPrice}</div>
      </div>

      <div className="delete" onClick={() => {deleteItem(obj.id)}}>
        <BsX />
      </div>
    </div>
  );
};

export default CartItem;
