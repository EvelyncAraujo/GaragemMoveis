<script setup>
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

</script>

<template>
  <header>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link to="/categorias">Categorias</router-link> |
    <router-link to="/acessorios">Acessórios</router-link> |
    <router-link to="/marcas">Marcas</router-link> |
    <router-link to="/cores">Cores</router-link> |
    <div v-if="authStore.loggedIn">
    <router-link  to="/logout">Logout</router-link> |
      {{ authStore.user.email }}
    </div>
    <router-link v-else to="/login">Login</router-link>
  </header>
  <main>
    <RouterView />
  </main>
</template>