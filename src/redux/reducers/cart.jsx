import { omit } from "lodash";

const initialState = {
  cartItems: {},
  totalPrice: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SNEAKERS_CART":
      const newItem = {
        ...state.cartItems,
        [action.payload.id]: action.payload,
      };

      return {
        ...state,
        cartItems: newItem,
        totalPrice: Object.values(newItem).reduce(
          (sum, obj) => sum + obj.price,
          0
        ),
      };
    case "REMOVE_SNEAKERS_CART":
      const currentItems = omit(state.cartItems, [action.payload]);
      return {
        ...state,
        cartItems: currentItems,
        totalPrice: Object.values(currentItems).reduce(
          (sum, obj) => sum + obj.price,
          0
        ),
      };

    case "REMOVE_SNEAKERS_ALL_CART":
      return {
        ...state,
        cartItems: {},
        totalPrice: 0,
      };

    default:
      return state;
  }
};

export default cart;
