const defaultUrl = "https://api-fazer-lista.herokuapp.com/agendas";

export const Api = {
  createAgenda: async (agenda) => {
    console.log(agenda)
    // const body = {
    //   id: agenda,
    //   text:agenda
    // }
    const response = await fetch(`${defaultUrl}/create-agenda`, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(agenda),
    });

    const newAgenda = await response.json();

    return newAgenda;
  },


  //OUTRA FORMA DE FAZER
//   getAllAgendas: async () => {
//     const response = await fetch(`${defaultUrl}/all-agendas`);
//     const allAgendas = await response.json();
//     console.log(allAgendas)
//     return allAgendas;
//   },


  getAllAgendas: async () => {
    return await fetch(`${defaultUrl}/all-agendas`).then(data => data.json())
  },

// find  retorna todos os iguais 
// findone retorna somente 1

  getAgendaById: async (id) => {
    const response = await fetch(`${defaultUrl}/one-agenda/${id}`);
    const agenda = response.json();
    return agenda;
  },

  updateAgenda: async (id, agenda) => {
    console.log(id)
    console.log(agenda)
    const body = {text: agenda}// foi necessário criar um objeto
    const response = await fetch(`${defaultUrl}/update-agendas/${id}`, {
      method: "PUT",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(body),
    });

    const agendaUpdated = await response.json();
console.log(agendaUpdated)
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