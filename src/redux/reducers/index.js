import { combineReducers} from 'redux';

import sneakers from './sneakers';
import search from './search';
import favorite from './favorite';
import cart from './cart';
import orders from './orders';

const rootReducer = combineReducers({
    sneakers,
    search,
    favorite,
    cart,
    orders
  })

export default rootReducer;