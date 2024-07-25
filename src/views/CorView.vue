<script setup>
import { ref, reactive, onMounted } from "vue";
import CoresApi from "@/api/cores";
const coresApi = new CoresApi();

const defaultcor = { id: null, descricao: "" };
const cores = ref([]);
const cor = reactive({ ...defaultcor });

onMounted(async () => {
  cores.value = await coresApi.buscarTodasAscores();
});

function limpar() {
  Object.assign(cor, { ...defaultcor });
}

async function salvar() {
  if (cor.id) {
    await coresApi.atualizarcor(cor);
  } else {
    await coresApi.adicionarcor(cor);
  }
  cores.value = await coresApi.buscarTodasAscor();
  limpar();
}

function editar(cor_para_editar) {
  Object.assign(cor, cor_para_editar);
}

async function excluir(id) {
  await coresApi.excluircor(id);
  cores.value = await coresApi.buscarTodasAscores();
  limpar();
}
</script>

<template>
  <h1>cor</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="cor.descricao" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <hr />
  <ul>
    <li v-for="cor in cores" :key="cor.id">
      <span @click="editar(cor)">
        ({{ cor.id }}) - {{ cor.descricao }} -
      </span>
      <button @click="excluir(cor.id)">X</button>
    </li>
  </ul>
</template>

<style></style>