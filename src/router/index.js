import {createWebHistory, createRouter} from "vue-router";

import AdminLogin from "../components/AdminLogin.vue";
import ProductList from "../components/ProductList.vue";

import AboutUs from "../components/AboutUs.vue";
import ContactUs from "../components/ContactUs.vue";

const routes = [
    {
        path: "/about", 
        component: AboutUs
    },
    {
        path:"/contact",
        component: ContactUs
    },

    {
        path: "/",
        alias: "/login",
        name: "adminlogin",
        component: AdminLogin
    },
    {
        path:"/products",
        name:"productList",
        component: ProductList
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;