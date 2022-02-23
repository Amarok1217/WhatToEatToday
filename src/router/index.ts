import { createRouter, createWebHashHistory } from 'vue-router';

// const Demo = () => import('@/components/Demo.vue');
import Demo from '@/components/Demo.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    components: Demo,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
