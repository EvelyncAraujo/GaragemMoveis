<script setup>
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
</script>

<template>
  <div class="pages">
    <RouterLink to="/acessorios"> Acessórios </RouterLink>
    <RouterLink to="/categorias"> Categorias </RouterLink>
    <RouterLink to="/cores"> Cores </RouterLink>
    <RouterLink to="/marcas"> Marcas </RouterLink>
    <div class="divider" />
      <div v-if="authStore.loggedIn">
      <router-link  to="/logout">Logout</router-link> 
        {{ authStore.user.email }}
      </div>
      <router-link v-else to="/login">Login</router-link>
    </div>
</template>

<style scoped>
#footerMenu {
  position: fixed;
  bottom: 15%;
  right: 0;

  width: 20%;
  border-top: #eeeeee 1px solid;
  background-color: white;

  display: block;
  padding: 1rem;
}

.pages {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.pages a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #282828;
  font-size: 1rem;
  transition: color 0.3s;
}

.divider {
  margin-top: 1rem;
  border-top: 1px solid #eeeeee;
}
</style>