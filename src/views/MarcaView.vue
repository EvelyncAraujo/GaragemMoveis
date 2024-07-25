<script setup>
import { ref, reactive, onMounted } from "vue";
import MarcasApi from "@/api/marcas";
const marcasApi = new MarcasApi();

const defaultmarca = { id: null, nome: "" };
const marcas = ref([]);
const marca = reactive({ ...defaultmarca });

onMounted(async () => {
  marcas.value = await marcasApi.buscarMarca();
});

function limpar() {
  Object.assign(marca, { ...defaultmarca });
}

async function salvar() {
  if (marca.id) {
    await marcasApi.atualizarMarca(marca);
  } else {
    await marcasApi.adicionarMarca(marca);
  }
  marca.value = await marcasApi.buscarMarca();
  limpar();
}

function editar(marca_para_editar) {
  Object.assign(marca, marca_para_editar);
}

async function excluir(id) {
  await marcasApi.excluirMarca(id);
  marcas.value = await marcasApi.buscarMarca();
  limpar();
}
</script>

<template>
  <h1>marca</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="marca.nome" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <hr />
  <ul>
    <li v-for="marca in marcas" :key="marca.id">
      <span @click="editar(marca)">
        ({{ marca.id }}) - {{ marca.nome }} -
      </span>
      <button @click="excluir(marca.id)">X</button>
    </li>
  </ul>
</template>

<style></style>