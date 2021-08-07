import React from 'react';
import {FaPlus} from 'react-icons/fa';
import {BsCheck} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai';
import cn from 'classnames';

const ItemElement = ({obj, dispatchFavoritePeople, personFavorite, dispatchCart, cart}) => {

    let itemPrice =
    obj.price
      .toString()
      .replace(/(^0|[A-Za-zА-Яа-яЁё]|\s)/, "")
      .replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ") + ` руб.`;

    return (
        <div className="catalog__content-wrap" key={obj.id}>
        <div className="item">
            <div className={cn('item-heart', {'active' : personFavorite})} onClick={() => dispatchFavoritePeople(personFavorite, obj)} >
                <AiFillHeart />
            </div>
            <div className="item-img">
                <img src={obj.imageUrl} alt={obj.title} />
            </div>
            <div className="item-title">{obj.title}</div>
            <div className="item-price">
                <div className="price">
                  <p>ЦЕНА:</p>
                  <span>{itemPrice}</span>
                  </div>
                <div className={cn('add', {'active' : cart})} onClick={() => dispatchCart(cart, obj)}>
                    {cart ? <BsCheck /> : <FaPlus />}                    
                </div>
            </div>
        </div>
    </div>
    );
}

export default ItemElement;