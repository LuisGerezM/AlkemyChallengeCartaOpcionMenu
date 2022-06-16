function informationInteres(platos, firstAttribute, secondAttribute = null) {
  const preparationMinutes = platos.reduce((acc, item) => {
    if (secondAttribute)
      return (acc += item[firstAttribute] / item[secondAttribute]);

    return (acc += item[firstAttribute]);
  }, 0);

  return secondAttribute
    ? parseFloat(preparationMinutes.toFixed(2))
    : parseInt(preparationMinutes);
}

export const updateInformationMenu = (platos) => {
  let informationMenu = {
    accumulatePriceMenu: 0,
    averagePrepTime: 0,
    averageHealtScore: 0,
  };

  if (platos.length === 0) return informationMenu;

  informationMenu["accumulatePriceMenu"] = informationInteres(
    platos,
    "pricePerServing",
    "servings"
  );

  // promedio preparacion
  informationMenu["averagePrepTime"] =
    informationInteres(platos, "readyInMinutes") / platos.length;

  // promedio salud
  informationMenu["averageHealtScore"] =
    informationInteres(platos, "healthScore") / platos.length;

  return informationMenu;
};
