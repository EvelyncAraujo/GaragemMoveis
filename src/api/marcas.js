import axios from "axios";
export default class MarcasApi {
  async buscarTodasAsMarcas() {
    const { data } = await axios.get("/marca/");
    return data.results;
  }
  async adicionarMarca(marca) {
    const { data } = await axios.post("/marca/", marca);
    return data.results;
  }
  async atualizarMarca(marca) {
    const { data } = await axios.put(`/marca/${marca.id}/`, marca);
    return data.results;
  }
  async excluirMarca(id) {
    const { data } = await axios.delete(`/marca/${id}/`);
    return data.results;
  }
}