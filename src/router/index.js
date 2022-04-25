import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/exchange",
      name: "Foregn-Exchange",
      component: () => import("../views/pages/ForeignExchange.vue")
    },
    { path: "/", redirect: { name: "Foregn-Exchange" } },
    { path: "/404", alias: "/*", name: "PageNotFound", component: () => import("../views/pages/PageNotFound.vue") }
  ]
});

export default router;
