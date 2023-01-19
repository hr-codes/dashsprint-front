export default [
  {
    path: 'auth',
    meta: {
      requiresLogin: false,
    },
    redirect: {
      name: 'auth.sign-in',
    },
    component: () => import('@/modules/auth/layouts/auth.vue'),
    children: [
      {
        path: 'sign-up',
        name: 'auth.sign-up',
        meta: {
          requiresLogin: false,
        },
        component: () => import('@/modules/auth/views/sign-up.vue'),
      },
      {
        path: 'sign-in',
        name: 'auth.sign-in',
        meta: {
          requiresLogin: false,
        },
        component: () => import('@/modules/auth/views/sign-in.vue'),
      },
    ],
  },
];
