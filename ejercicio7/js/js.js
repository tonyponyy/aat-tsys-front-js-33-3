let divide_array=(arr)=>{
    par=[];
    impar=[];
    for (let i = 0; i < arr.length; i++) {
       if (arr[i]%2 == 0 && arr[i]> 5){
        par.push(arr[i])
       }else if (arr[i]>5) {
        impar.push(arr[i])
       }
    }
    return{par,impar}
}

let print_arrays


array = [1,2,3,4,5,6,7,8,9,12,14,76,54,89];
array_dividida = divide_array(array)
console.log(array_dividida.par +","+array_dividida.impar)
