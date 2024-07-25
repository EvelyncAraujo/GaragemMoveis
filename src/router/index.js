import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '@/layouts/LayoutFull.vue';
import CategoriaView from "../views/CategoriaView.vue";
import AcessorioView from "../views/AcessorioView.vue";
import CorView from "../views/CorView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import MarcaView from "../views/MarcaView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: "/acessorios",
          name: "acessorios",
          component: AcessorioView,
        },
        {
          path: "/categorias",
          name: "categoria",
          component: CategoriaView,
        },
        {
          path: "/cores",
          name: "cores",
          component: CorView,
        },
        {
          path: "/login",
          name: "login",
          component: LoginView,
        },
        {
          path: "/logout",
          name: "logout",
          component: LogoutView,
        },
        {
          path: "/marcas",
          name: "marcas",
          component: MarcaView,
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/LoginView.vue'),
        },
      ],
    },
  ],
});

export default router;