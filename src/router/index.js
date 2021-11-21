import Vue from "vue";
import VueRouter from "vue-router";
import Posts from "../views/Posts.vue";
import Login from "../views/Login.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/posts",
        name: "posts",
        component: Posts
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;