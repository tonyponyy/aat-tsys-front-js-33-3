let lee_receta = (receta) => {
    console.log(
      "Nombre :" +
        receta.nombre +
        " Tiempo:" +
        receta.tiempo +
        " min  Ingredientes:" +
        receta.ingredientes
    );
  };

let receta = {
    nombre: "Macarrones con tomate y queso",
    tiempo: 20,
    ingredientes: ["Macarrones", "Tomate", "Queso"],
  };
  let receta2 = {
    nombre: "Calçots",
    tiempo: 15,
    ingredientes: ["Calçots", "Salsa romesco"],
  };
  let receta3 = {
    nombre: "Colacao",
    tiempo: 20,
    ingredientes: ["Leche", "Colacao"],
  };

  let recetas = [receta,receta2,receta3]

  recetas.forEach(function (receta) {
    lee_receta(receta)
});
