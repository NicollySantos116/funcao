function maiorDeTres(a, b, c){
    if (a >= b && a >= c){
        return a;
    }else if (b >= a && b>= c){
        return b;
    }else{
        return c;       
    }
    }
console.log(maiorDeTres(5,9,2))
console.log(maiorDeTres(-3,-7,-1))