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

lee_receta(receta);
