const initialState = {
    orderItems: [],
    orderNumber: 0
  };
  
  const orders = (state = initialState, action) => {
    switch (action.type) {
      case "SET_SNEAKERS_ORDER":
        return {
          ...state,
          orderItems: [...state.orderItems, ...action.payload],
          orderNumber: state.orderNumber + 1
        };
      default:
        return state;
    }
  };
  
  export default orders;