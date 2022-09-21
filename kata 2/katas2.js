// comece a criar a sua função add na linha abaixo
function add(a, b){
    let resposta
    for(let i = 1; i <= b; i++){  
        resposta = i + a;
    }
    return resposta
}

// descomente a linha seguinte para testar sua função
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a, b){
    let contador = 0;
    for(let i = 1; i <= b; i= add(i, 1)){
        contador = add(contador, a);
    }
    return contador;
}
// function multiply(a, b){
//     let count = 0
//     for(let i = 1; i <= b; i++) {
//         count = add(count, a)
//     }
//     return count
// }

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');
//comece a criar a sua função power na linha abaixo
function power(a, b){
    let potencia = 1;
    for(let i = 1; i <= b; i= add(i, 1)){       
        potencia = multiply(potencia, a);
    }
    return potencia;
}
// function power(x, n){
// let respota = x ** n
// return respota
// } 

// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


//comece a criar a sua função factorial na linha abaixo
function factorial(x){
    let resultado = 1;
    for (let i = 2; i <= x; i++) {
        resultado =  multiply(resultado, i);
    }
    return resultado;
}

// var fatorial = x;
// var resultado = fatorial;
// for (var i = 1; i < fatorial; i++) {
//     resultado *= i;
// }
// console.log(resultado);
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
