import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/practice-one',
      name: 'practice-one',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PracticeOneView.vue')
    },
    {
      path: '/to-do-list',
      name: 'to-do-list',
      component: () => import('../views/ToDoList.vue')
    }
  ],
});

export default router;
