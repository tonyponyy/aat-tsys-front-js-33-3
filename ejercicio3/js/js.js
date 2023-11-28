var javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
javascript1.splice(javascript1.indexOf("DOM"), 1, "Objetos");
javascript1.splice(javascript1.indexOf("Arrays"), 1, "ArraysDifíciles");
var copia_array = javascript1.slice(-2);
var indice_funciones = javascript1.indexOf("Funciones");

console.log("Índice del elemento 'Funciones':", indice_funciones);