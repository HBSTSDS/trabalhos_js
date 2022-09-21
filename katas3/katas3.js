const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    // implemente o código do kata 1 aqui
    let meuRetorno = [];
    let number = 1;
        while ( number <= 25){
            meuRetorno.push(number);
            number ++;
        }
        return meuRetorno;
}
console.log(kata1());
function kata2() {
    // implemente o código do kata 2 aqui
    let meuRetorno = [];
    let number = 25;
        while ( number >= 1){
            meuRetorno.push(number);
            number --;
        }
        return meuRetorno;
}
console.log(kata2());


function kata3() {
    // implemente o código do kata 3 aqui
    let meuRetorno = [];
    let number = -1;
        while ( number >= -25){
            meuRetorno.push(number);
            number --;
        }
        return meuRetorno;
}
console.log(kata3());


function kata4() {
    // implemente o código do kata 4 aqui
    let meuRetorno = [];
    let number = -25;
        while ( number <= -1){
            meuRetorno.push(number);
            number ++;
        }
        return meuRetorno;
}
console.log(kata4());


function kata5() {
    // implemente o código do kata 5 aqui
    let meuRetorno = [];
    let number = 25;
        while ( number >= -25){
            if(number % 2 !== 0){
                meuRetorno.push(number);
            }
            
            number --;
        }
        return meuRetorno;
}
console.log(kata5());


function kata6() {
    // implemente o código do kata 6 aqui
    let meuRetorno = [];
    let number = 1;
        while ( number <= 100){
            if(number % 3 === 0){
                meuRetorno.push(number);
            }
            
            number ++;
        }
        return meuRetorno;
}
console.log(kata6());


function kata7() {
    // implemente o código do kata 7 aqui
    let meuRetorno = [];
    let number = 1;
        while ( number <= 100){
            if(number % 7 === 0){
                meuRetorno.push(number);
            }
            
            number ++;
        }
        return meuRetorno;
}
console.log(kata7());


function kata8() {
    // implemente o código do kata 8 aqui
    let meuRetorno = [];
    let number = 100;
        while ( number >= 1){
            if(number % 7 === 0 && number % 3 === 0){
                meuRetorno.push(number);
            }
            
            number --;
        }
        return meuRetorno;
}
console.log(kata8());


function kata9() {
    // implemente o código do kata 9 aqui
    let meuRetorno = [];
    let number = 1;
        while ( number <= 100){
            if(number % 5 === 0 && number % 2 !== 0){
                meuRetorno.push(number);
            }
            
            number ++;
        }
        return meuRetorno;
}
console.log(kata9());


function kata10() {
    // implemente o código do kata 10 aqui
    return sampleArray;
}
console.log(kata10())
function kata11() {
    // implemente o código do kata 11 aqui
    for(let i = 0;i < sampleArray.length; i++){
        
        let numero = sampleArray[i];

        if(numero % 2 == 0){
            console.log(numero); 
        }
    }
}
console.log(kata11())
function kata12() {
    // implemente o código do kata 12 aqui
    for(let i = 0;i < sampleArray.length; i++){
        
        let numero = sampleArray[i];

        if(numero % 2 !== 0){
            console.log(numero); 
        }
    }
}
console.log(kata12())


function kata13() {
    // implemente o código do kata 13 aqui
    for(let i = 0;i < sampleArray.length; i++){
        
        let numero = sampleArray[i];

        if(numero % 8 == 0){
            console.log(numero); 
        }
    }
}
console.log(kata13())


function kata14() {
    // implemente o código do kata 14 aqui
    for(let i = 0;i < sampleArray.length; i++){
        
        let numero = sampleArray[i];

        if(aoQuadrado = numero * numero){
            console.log(aoQuadrado); 
        }
    }
}
console.log(kata14())


function kata15() {
    // implemente o código do kata 15 aqui
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var soma = 0;
    for(var i = 0; i < arr.length; i++) {
    soma += arr[i];
}
console.log(soma);
}
console.log(kata15())
function kata16() {
    // implemente o código do kata 16 aqui
    var soma = 0;
    for(var i = 0; i < sampleArray.length; i++) {
    soma += sampleArray[i];
}
console.log(soma);
}
console.log(kata16())
function kata17() {
    // implemente o código do kata 17 aqui
    let menor = 0
    for(let i = 0; i < sampleArray.length; i++){
        if(i == 0){
            menor = sampleArray[i]
        }
        if(sampleArray[i] < menor){
            menor = sampleArray[i]
        }
    }
    return menor
}
console.log(kata17())
function kata18() {
    // implemente o código do kata 18 aqui
    let maior = 0
    for(let i = 0; i < sampleArray.length; i++){
        if(i == 0){
            maior = sampleArray[i]
        }
        if(sampleArray[i] > maior){
            maior = sampleArray[i]
        }
    }
    return maior
}

console.log(kata18())
/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
// const sampleArray2 = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
// function menorNumero() {
//     let menor = 0
//     for(let i = 0; i < sampleArray.length; i++){
//         if(i == 0){
//             menor = sampleArray[i]
//         }
//         if(sampleArray[i] < menor){
//             menor = sampleArray[i]
//         }
//     }
//     return menor
// }
// console.log(menorNumero())