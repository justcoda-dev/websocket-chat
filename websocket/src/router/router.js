import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/Auth";


Vue.use(VueRouter);

const routes = [
    {
        path: "/authorization",
        name: "Auth",
        component: Auth,
    },
    {
        path: "/messenger/:userId",
        name: "Messenger",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/MessengerBuilt"),
        children:[]
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

router.beforeEach((to, from, next) => {
    const userStorage = localStorage.getItem("user");
    const user = JSON.parse(userStorage)
    if (!userStorage && to.path !== "/authorization") {
        next({path: "/authorization"})
    } else if (userStorage && to.path !== `/messenger/${user.userId}`) {
        next({path: `/messenger/${user.userId}`})
    }
    next()
})


export default router;
