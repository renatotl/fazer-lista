const defaultUrl = "https://api-fazer-lista-react.onrender.com/agendas";

export const Api = {
  createAgenda: async (agenda) => {
    const response = await fetch(`${defaultUrl}/create-agenda`, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(agenda),
    });

    const newAgenda = await response.json();

    return newAgenda;
  },

//   getAllAgendas: async () => {
//     const response = await fetch(`${defaultUrl}/all-agendas`);
//     const allAgendas = await response.json();
//     console.log(allAgendas)
//     return allAgendas;
//   },


  getAllAgendas: async () => {
    return await fetch(`${defaultUrl}/all-agendas`).then(data => data.json())
   
   
  },

  getAgendaById: async (id) => {
    const response = await fetch(`${defaultUrl}/one-agenda/${id}`);
    const agenda = response.json();
    return agenda;
  },

  updateAgenda: async (id, agenda) => {
    const response = await fetch(`${defaultUrl}/update/${id}`, {
      method: "PUT",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(agenda),
    });

    const agendaUpdated = await response.json();

    return agendaUpdated;
  },

  deleteAgenda: async (id) => {
    const response = await fetch(`${defaultUrl}/delete-agendas/${id}`, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const agendaDeleted = response.json();

    return agendaDeleted;
  },
};