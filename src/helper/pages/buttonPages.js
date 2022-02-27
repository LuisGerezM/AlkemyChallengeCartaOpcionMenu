export const buttonsPages = () => {
    const buttons = [
      {
        name: "Lista Platos",
        page: "lista-platos",
        value: "1",
        variant: "outline-primary",
      },
      {
        name: "Buscar Platos",
        page: "buscador-platos",
        //  para probar el detalle plato cuando no m deja hacer consultas la api
        // page: "detalles-plato",
        value: "2",
        variant: "outline-success",
      },
    ];
  
    return buttons;
  };
  