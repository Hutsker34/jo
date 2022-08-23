import { createWebHistory, createRouter } from "vue-router";

import LandingScreen from '../screens/LandingScreen'


const routes = [
    {
        path: '/',
        name: 'LandindScreen',
        component: LandingScreen
    }
    
]






const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.replace({ path: '*', redirect: '/' })

export default router;