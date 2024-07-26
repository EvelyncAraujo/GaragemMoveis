<script setup>
import LogoTitle from '@/components/templates/LogoTitle.vue'
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
</script>

<template>
  <div class="logo_and_menu">
    <logo-title class="mb-2" />
    <div class="menu">
      <router-link to="/acessorios"> Acessórios </router-link>
      <router-link to="/categorias"> Categorias </router-link>
      <router-link to="/cores"> Cores </router-link>
      <router-link to="/marcas"> Marcas </router-link>
      <div class="divider" />
      <div v-if="authStore.loggedIn">
      <router-link  to="/logout">Logout</router-link> 
        {{ authStore.user.email }}
      </div>
      <router-link v-else to="/login">Login</router-link>
    </div>
  </div>
</template>

<style scoped>
.mb-2 {
  margin-bottom: 1.5rem;
}

.menu {
  padding: 3rem;
}

.menu a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  gap: 1rem;
  font-size: 1.3rem;
  margin-top: 2.2rem;
}

.divider {
  margin-top: 1rem;
  border-top: 1px solid #eeeeee;
}
</style>