let test_arrays=(ar1,ar2)=>{
    let ar_temp = [];
    for (let i = 0; i < ar1.length; i++) {
      for (let j = 0; j < ar2.length; j++) {
       if (ar1[i] == ar2[j]){
        ar_temp.push(ar1[i])
       }
      }
    }
    console.log(ar_temp)

}


var javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
var javascript2 = ["Objetos", "Arrays", "ParseInt"];

test_arrays(javascript1,javascript2);
