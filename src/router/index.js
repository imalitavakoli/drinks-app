import { createRouter, createWebHashHistory } from 'vue-router'

import DrinksView from '../views/DrinksView.vue'
const DrinkView = () => import('../views/DrinkView.vue') // Let's use dynamic import to generate a separate chunk (startup.[hash].js) for this route (lazy-loading)
const NotFoundView = () => import('../views/NotFoundView.vue')

const routes = [
  {
    path: '/',
    name: 'Drinks',
    component: DrinksView
  },
  {
    path: '/drinks',
    redirect: '/'
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/drinks/:drink',
    name: 'Drink',
    component: DrinkView
  },
  {
    path: '/:notfound(.*)*', // Will match everything and put it under `$route.params.notfound`.
    name: 'NotFound',
    component: NotFoundView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If user herself is navigating with back/forward buttons, just stay where she was before
    if (savedPosition) return savedPosition;

    // Otherwise, scroll to top with a timeout. Why? to give Vuejs time to do
    // our CSS transition on routing first and then change the scroll position.
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve({ left: 0, top: 0 }) }, 300)
    });
  }
})

export default router
