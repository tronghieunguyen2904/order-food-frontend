import admin from "../pages/admin/admin";
import Cart from "../pages/cart";
import loading from "../pages/cart/productCart/loading";
import Thanhtoan from "../pages/cart/productCart/thanhtoan";
// import Detail from "../pages/detail";
import HomePage from "../pages/home";
import Login from "../pages/login";
import news from "../pages/restaurant/news";
import restaurant from "../pages/restaurant/restaurant";
import Signup from "../pages/signup/signup";
import user from "../pages/user/user";
import UserOrder from "../pages/user/userOrder";


const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: Login, Layout: Login },
    { path: '/signup', component: Signup, Layout: Signup },
    { path: '/cart', component: Cart },
    { path: '/restaurant', component: restaurant },
    { path: '/news', component: news },
    { path: '/admin', component: admin, Layout: admin },
    // { path: '/detail/:id', component: Detail },
    { path: '/user', component: user },
    { path: '/user/order', component: UserOrder },
    { path: '/user/order/payment', component: loading },
    { path: '/user/order/thanhtoan', component: Thanhtoan },
]

export { routes };