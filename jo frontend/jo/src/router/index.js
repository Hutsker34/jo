import { createWebHistory, createRouter } from "vue-router";

import LandingScreen from "../screens/LandingScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import ReviewsScreen from "../screens/ReviewsScreen";

const routes = [
  {
    path: "/",
    name: "LandindScreen",
    component: LandingScreen,
  },
  {
    path: "/aboutUs",
    name: "AboutUsScreen",
    component: AboutUsScreen,
  },
  {
    path: "/reviews",
    name: "ReviewsScreen",
    component: ReviewsScreen,
  },
  {
    path: "/portfolio",
    name: "PortfolioScreen",
    component: PortfolioScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.replace({ path: "*", redirect: "/" });

export default router;
