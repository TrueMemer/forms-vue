import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('./pages/Home.vue')
    },
    {
        path: '/quizes',
        component: () => import('./pages/Quizes.vue')
    },
    {
        path: '/form/edit/:id',
        component: () => import('./pages/FormEditor.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
