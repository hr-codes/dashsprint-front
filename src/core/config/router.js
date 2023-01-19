import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/:pathMatch(.*)',
    redirect: {
      name: 'notfound',
    },
  },
  {
    path: '/not-found',
    name: 'notfound',
    component: () => import('@/core/views/errors/not-found.vue'),
  },
  {
    path: '/',
    name: 'core.root',
    component: () => import('@/core/layouts/blank.vue'),
    children: [
      {
        path: '',
        name: 'core.layout',
        meta: {
          requiresLogin: true,
        },
        component: () => import('@/core/layouts/default.vue'),
        children: [
          {
            path: '',
            name: 'core.home',
            meta: {
              requiresLogin: true,
            },
            component: () => import('@/core/views/HomeView.vue'),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresLogin && !localStorage.getItem('access_token')) {
    next({ name: 'auth.sign-in' });
  }

  if (to.name === 'auth.sign-in' && localStorage.getItem('access_token')) {
    next({ name: 'core.home' });
  }

  next();
});

const allModulesRoutes = import.meta.globEager(`@/modules/**/config/routes.js`);

const allRoutes = Object.values(allModulesRoutes).map((route) => route.default);

allRoutes.forEach((route) => {
  route.forEach((thisRoute) => {
    router.addRoute('core.root', thisRoute);
  });
});

export default router;
