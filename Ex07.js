function filtarPares(arr){
    let Pares = [];
    for (let i = 0; i < arr.length; i++ ){
        if(arr[i] % 2 === 0){
            Pares.push(arr[i]);
        }
    }
    return Pares;
}

console.log(filtarPares([1,2,3,4,5,6]));
console.log(filtarPares([7,9,11]));