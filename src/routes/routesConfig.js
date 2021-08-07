import Home from './../pages/Home';
import Favorites from './../pages/Favorites'
import Orders from './../pages/Orders';


const routesConfig = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/favorites',
        exact: true,
        component: Favorites
    },
    {
        path: '/orders',
        exact: true,
        component: Orders
    }


];

export default routesConfig;