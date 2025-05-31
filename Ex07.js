function filtrarPares(arr){
    let pares = [];
    for (let i = 0; i < arr.length; i++ ){
        if(arr[i] % 2 === 0){
            pares.push(arr[i]);
        }
    }
    return pares;
}

console.log(filtrarPares([1,2,3,4,5,6]));
console.log(filtrarPares([7,9,11]));
console.log(filtrarPares([0,-2,-3,-4,5]));
console.log(filtrarPares([10,21,32,43]));
