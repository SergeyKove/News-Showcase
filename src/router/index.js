import { createRouter, createWebHistory } from 'vue-router'
import NewsPage from '../pages/NewsPage.vue'
import NewsDetail from '../pages/NewsDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NewsPage,
    },
    {
      path: '/:slug',
      name: 'about',
      component: NewsDetail,
      props: true,
    },
  ],
})

export default router
