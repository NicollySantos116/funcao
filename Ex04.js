function inverterString(str){
    return str.split('').reverse().join('');
}

let stringOriginal= "JavaScript";
let stringInvertida = inverterString(stringOriginal);
console.log("String original: ", stringOriginal);
console.log("String invertida: ", stringInvertida);