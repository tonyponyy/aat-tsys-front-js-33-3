class Receta {
    constructor(nombre, tiempo, ingredientes) {
        this.nombre = nombre;
        this.tiempo = tiempo;
        this.ingredientes = ingredientes;
    }
}

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

var receta1 = new Receta("Tarta de Manzana", "1 hora", ["manzanas", "harina", "azúcar", "canela", "huevo"]);
var receta2 = new Receta("Pizza Casera", "45 minutos", ["masa", "tomate", "queso", "jamón", "orégano"]);
var receta3 = new Receta("Ensalada César", "30 minutos", ["lechuga", "pollo", "parmesano", "crutones", "salsa"]);

var array = [receta1, receta2, receta3];

array.forEach(function (receta) {
    lee_receta(receta);
});