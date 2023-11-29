import admin from "../pages/admin/admin";
import Cart from "../pages/cart";
import HomePage from "../pages/home";
import Login from "../pages/login";
import news from "../pages/restaurant/news";
import restaurant from "../pages/restaurant/restaurant";
import Signup from "../pages/signup/signup";

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: Login, Layout: Login },
    { path: '/signup', component: Signup, Layout: Signup },
    { path: '/cart', component: Cart },
    { path: '/restaurant', component: restaurant },
    { path: '/news', component: news },
    { path: '/admin', component: admin, Layout: admin },
]

export { routes };