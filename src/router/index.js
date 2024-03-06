import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import contact from "../views/Contact.vue";
// import profil from "../views/Profil.vue"
import Dashboard from "../views/Dashboard.vue"
import Tanaman from "../views/Tanaman.vue"

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: '/tanaman',
        name: 'Tanaman',
        component: Tanaman
    },
    {
        path: '/contact',
        name: 'Contact',
        component: contact
    },
    // {
    //     path: '/produk/:slug',
    //     name: 'SingleProduk',
    //     component: singleproduk
    // },
    // {
    //     path: '/cart',
    //     name: 'Cart',
    //     component: cart
    // },
    // {
    //     path: '/checkout',
    //     name: 'Checkout',
    //     component: checkout
    // },
    // {
    //     path: '/category',
    //     name: 'Category',
    //     component: category
    // },
    // {
    //     path: '/brands',
    //     name: 'Brands',
    //     component: brands
    // },
    // {
    //     path: '/profile',
    //     name: 'Profile',
    //     beforeEnter: cekToken,
    //     component: profil
    // },
    // {
    //     path: '/orderpage/:orderCode',
    //     name: 'OrderPage',
    //     component: OrderPage,
    //     props: true
    // }

]
// function cekToken(to, from, next) {
//     var isAuthenticated = false;
//     if (localStorage.getItem('token')) {
//         isAuthenticated = true;
//         next();
//     }
//     else {
//         isAuthenticated = false;
//         next('/login')
//     }


// }

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;