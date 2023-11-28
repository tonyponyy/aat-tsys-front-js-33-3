let intercalar =(ar1,ar2) =>{
    var res = [];
    for (let i = 0; i < ar1.length; i++) {
        res.push(ar1[i]);
        res.push(ar2[i]);
    }
    ar1.length = 0;
    ar2.length = 0;
    return res;

}

var array_uno = [1, 2, 3];
var array_dos = [4, 5, 6];
var resultado = intercalar(array_uno,array_dos)
console.log("Resultado --> "+resultado);