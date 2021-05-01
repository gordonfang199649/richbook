import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    redirect: { name: "billing" },
    children: [
      {
        path: "/billing",
        name: "billing",
        component: () => import("@/views/Billing/index.vue"),
        meta: { title: "月記帳本", icon: "el-icon-notebook-1" },
      },
      {
        path: "/account",
        name: "account",
        component: () => import("@/views/Account.vue"),
        meta: { title: "帳戶管理", icon: "el-icon-money" },
      },
      {
        path: "/charts",
        name: "charts",
        component: () => import("@/views/Charts.vue"),
        meta: { title: "圖表分析", icon: "el-icon-pie-chart" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
