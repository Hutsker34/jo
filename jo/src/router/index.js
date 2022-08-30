import { createWebHistory, createRouter } from "vue-router";

import LandingScreen from '../screens/LandingScreen'
import PortfolioScreen from '../screens/PortfolioScreen'
import PortfolioBlock from '../screens/content/PortfolioBlock'
import AboutUsScreen from '../screens/AboutUsScreen'
import ReviewsScreen from '../screens/ReviewsScreen'
import ReviewBlock from '../screens/content/ReviewBlock'



const routes = [
    {
        path: '/',
        name: 'LandindScreen',
        component: LandingScreen
    },
    {
        path: '/aboutUs',
        name: 'AboutUsScreen',
        component: AboutUsScreen
    },
    {
        path: '/reviews',
        name: 'ReviewsScreen',
        component: ReviewsScreen,
        children: [
            {
                path: '/reviewBlock',
                name: '/ReviewBlock',
                component: ReviewBlock
            }
        ]
    },
    {
        path: '/portfolio',
        name: 'PortfolioScreen',
        component: PortfolioScreen,
        children: [
            {
                path: '/portfolioBlock',
                name: '/PortfolioBlock',
                component: PortfolioBlock
            }
        ]
    }
    
]






const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.replace({ path: '*', redirect: '/' })

export default router;

