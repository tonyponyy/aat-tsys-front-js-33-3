let largaria_array = (array) => {
  console.log("Largaria del array:", array.length);
};

let letra_aleatoria = (array) => {
  var random_num = Math.floor(Math.random() * array.length);
  console.log("Elemento aleatorio:", array[random_num]);
};

var array1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
largaria_array(array1);
letra_aleatoria(array1);
