let imprime_persona=(obj)=>{
    console.log("Nombre ->"+obj.nombre+" "+obj.apellidos)
    
}

let persona = {
    nombre:"luis",
    apellidos:"Escobar Toblerone",
    direccion: "Bonavista no 15",
    ciudad:"Tarragona",
    Pais:"Ecuador",
    edad: 67
}

imprime_persona(persona);