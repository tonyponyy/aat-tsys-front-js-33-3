let imprime_personas=(personas)=>{
    personas.forEach(function (persona) {
        console.log("nombre :"+persona.nombre)
        console.log("edad :"+persona.edad)
    });
}

let persona = {
    nombre:"luis",
    edad: 67
}
let persona2 = {
    nombre:"Carlos",
    edad: 22
}
let persona3 = {
    nombre:"Enrique",
    edad: 43
}

let personas = [persona,persona2,persona3]
imprime_personas(personas);



