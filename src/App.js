import {BrowserRouter, Route} from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import routesConfig from './routes/routesConfig';
import { useState } from "react";
import cn from 'classnames';


function App() {

  const [openCart, setOpenCart] = useState(false);
  const [placedOrder, setPlacedOrder] = useState(false);
  const addOpenCart = () => {
    setOpenCart(true);
    document.body.style.overflow = 'hidden';
  }

  const closeCart = () => {
    setPlacedOrder(false);
    setOpenCart(false);
    document.body.style.overflow = 'visible';
  }

  const addOrder = () => {
    setPlacedOrder(true);
  }



  return (
    <BrowserRouter >
    <div className="wrapper">
      <div className={cn('overlay', {'active' : openCart})} onClick={e => (e.currentTarget === e.target) && closeCart() }></div>
        <Cart active={openCart} close={closeCart} placedOrder={placedOrder} addOrder={addOrder}  />
        <Header openCart={addOpenCart} />
        <div className="content">
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} component={route.component} />
          ))}
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
