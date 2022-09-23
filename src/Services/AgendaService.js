import { Api } from "Helpers/Api";

const parseResponse = (response) => response.json();







export const AgendaService = {
  getLista: () =>
    fetch(Api.agendaLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.agendaById(id), { method: "GET" }).then(parseResponse),
  create: () =>
    fetch(Api.createAgenda(), { method: "POST" }).then(parseResponse),
  updateById: (id) =>
    fetch(Api.updateAgendaById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteAgendaById(id), { method: "DELETE" }).then(parseResponse),
};