import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/about' },
    { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
    { path: '/volunteer', name: 'volunteer', component: () => import('@/views/VolunteerView.vue') },
    { path: '/contact', name: 'contact', component: () => import('@/views/ContactView.vue') },
    { path: '/donate', name: 'donate', component: () => import('@/views/DonateView.vue') },
  ],
})

export default router
