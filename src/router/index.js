import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CatView from "../views/CatView.vue";
import ProdDet from "../views/ProdDet.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/cat",
        name: "cat",
        component: CatView,
    },
    {
        path: "/prod",
        name: "prod",
        component: ProdDet,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
