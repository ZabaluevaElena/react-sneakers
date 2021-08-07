import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemElement from "../components/item/ItemElement";
import { removePersonFromFavorites, setPersonToFavorite } from "../redux/action/favorite";
import { BsChevronLeft } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { addSneakersToCart, removeSneakersToCart } from "../redux/action/cart";
import emogi from "../accets/img/imogi.png";
import Button from "../components/Button";

const Orders = () => {
  const {orderItems} = useSelector(({ orders }) => orders);
  const {cartItems} = useSelector(({ cart }) => cart);
  const favorite = useSelector(({ favorite }) => favorite);
  const [orderItem, setOrderItem] = useState([]);

  const history = useHistory();

  const handleGoBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  const dispatch = useDispatch();

  const dispatchFavoritePeople = (personFavorite, obj) => {
    if (personFavorite) {
        dispatch(removePersonFromFavorites(obj.id));
      } else {
        dispatch(setPersonToFavorite({
            [obj.id]: {
              id: obj.id,
              title: obj.title,
              imageUrl: obj.imageUrl,
              price: obj.price,
            },
          }));
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
    const arr = Object.values(orderItems);
    if (arr.length) {
      const res = arr.map((item) => item);
      setOrderItem(res);
    } else {
      setOrderItem([]);
    }
  }, [orderItems]);

  return (
    <div>
      {orderItem.length ? (
        <div className="catalog__content start">
          <div className="page-title">
            <span onClick={handleGoBack}>
              <BsChevronLeft />
            </span>
            <h2>Мои заказы</h2>
          </div>
          {orderItems.map((obj) => (
            <ItemElement
              key={obj.id}
              obj={obj}
              price={obj.price}
              personFavorite={Object.keys(favorite).some((elem) => elem == obj.id)}
              dispatchFavoritePeople={dispatchFavoritePeople}
              cart={Object.keys(cartItems).some((elem) => elem == obj.id)}
              dispatchCart={dispatchCart}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <img src={emogi} />
          <h2>Заказов нет :(</h2>
          <span>Вы ничего не заказали</span>
          <Button children="Вернуться назад" left onClick={handleGoBack} />
        </div>
      )}
    </div>
  );
};

//   const [favorItem, setFavorItem] = useState([]);
//   const favorite = useSelector(({ favorite }) => favorite);
//   const { cartItems } = useSelector(({ cart }) => cart);
//   const dispatch = useDispatch();

//   const dispatchFavoritePeople = (id) => {
//     if (window.confirm("Вы подтверждаете удаление?")) {
//       dispatch(removePersonFromFavorites(id));
//     }
//   };

//   const dispatchCart = (cart, obj) => {
//     if (cart) {
//       dispatch(removeSneakersToCart(obj.id));
//     } else {
//       dispatch(addSneakersToCart(obj));
//     }
//   };

//   useEffect(() => {
//     const arr = Object.values(favorite);
//     if (arr.length) {
//       const res = arr.map((item) => item);
//       setFavorItem(res);
//     } else {
//       setFavorItem([]);
//     }
//   }, [favorite]);

//   const history = useHistory();

//   const handleGoBack = (e) => {
//     e.preventDefault();
//     history.goBack();
//   };

//   return (
//     <div>
//       {favorItem.length ? (
//         <div className="catalog__content start">
//           <div className="page-title">
//             <span onClick={handleGoBack}>
//               <BsChevronLeft />
//             </span>
//             <h2>Мои закладки</h2>
//           </div>
//           {favorItem.map((obj) => (
//             <ItemElement
//               key={obj.id}
//               obj={obj}
//               price={obj.price}
//               personFavorite={true}
//               dispatchFavoritePeople={dispatchFavoritePeople}
//               cart={Object.keys(cartItems).some((elem) => elem == obj.id)}
//               dispatchCart={dispatchCart}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="empty">
//           <img src={emogi} />
//           <h2>Закладок нет :(</h2>
//           <span>Вы ничего не добавили в закладки</span>
//           <Button children="Вернуться назад" left onClick={handleGoBack} />
//         </div>
//       )}
//     </div>
//   );
// };

export default Orders;
