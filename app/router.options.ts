import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  routes: () => [
    {
      name: 'index',
      path: '/',
      component: () => import('~/pages/index.vue')
    },
    {
      name: 'index',
      path: '/custom',
      component: () => import('~/pages/example.vue')
    }
  ]
}