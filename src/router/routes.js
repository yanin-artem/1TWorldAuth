const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "registration",
        name: "registration",
        component: () => import("pages/RegistrationPage.vue"),
      },
      {
        path: "authentication",
        name: "authentication",
        component: () => import("pages/AuthenticationPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
