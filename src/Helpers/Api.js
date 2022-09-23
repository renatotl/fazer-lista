// rotas da documentaçao Swagger
const AgendaContext = {
    AgendaEndpoint: () => `${Api.baseUrl}/agendas`,
    agendaLista: () => `${AgendaContext.AgendaEndpoint()}/all-agendas`,
    agendaById: (id) => `${AgendaContext.AgendaEndpoint()}/one-agenda/${id}`,
    createAgenda: () => `${AgendaContext.AgendaEndpoint()}/create-agenda`,
    updateAgendaById: (id) => `${AgendaContext.AgendaEndpoint()}/update-agenda/${id}`,
    deleteAgendaById: (id) => `${AgendaContext.AgendaEndpoint()}/delete-agendas/${id}`,
  };


  export const Api = {
    baseUrl: "https://api-fazer-lista-react.onrender.com/agendas",
    ...AgendaContext,// o spred operation faz com que todos os dados da AgendaContext em cima fiquem aqui nesta Api
  };