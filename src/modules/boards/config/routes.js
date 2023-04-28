export default [
  {
    path: 'boards',
    meta: {
      requiresLogin: false,
    },
    redirect: {
      name: 'auth.sign-in',
    },
    component: () => import('@/core/layouts/default.vue'),
    children: [
      {
        path: 'show',
        name: 'boards.show',
        meta: {
          requiresLogin: false,
        },
        component: () => import('@/modules/boards/views/show.vue'),
      },
    ],
  },
];
