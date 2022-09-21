// exercicio 1
function oneThroughTwenty(){
  let meuRetorno = [];
  let number=1;
    while (number <= 20){
      meuRetorno.push(number);
      number ++;
    }
    return meuRetorno;
}
console.log(oneThroughTwenty());
// exercicio 2
function evensToTwenty(){
  let meuRetorno = [];
  let number = 1;
      while (number <= 20 ){  
          if(number % 2 === 0){
              
              meuRetorno.push(number);
          }
      
      number ++;
  }
  return meuRetorno;
}
console.log(evensToTwenty());

//exercicio 3
function oddsToTwenty(){
  let meuRetorno = [];
  let number = 1;
      while (number <= 20 ){  
          if(number % 2 !== 0){
             
              meuRetorno.push(number);
          }
      
      number ++;
  }
  return meuRetorno;
}
console.log(oddsToTwenty());

//exercicio 4
function multiplesOfFive(){
  let meuRetorno = [];
  let number = 1;
      while (number <= 100 ){  
          if(number % 5 === 0){
              
              meuRetorno.push(number);
          }
      
      number ++;
  }
  return meuRetorno;
}
console.log(multiplesOfFive());

//exercicio 5
function squareNumbers(){
  let meuRetorno = [];
  let number = 1;
      while (number <= 100 ){  
          if(  number * number <= 100 ){
              
              meuRetorno.push(number * number);
          }
      
      number ++;
  }
  return meuRetorno;
}
console.log(squareNumbers());

//exercicio 6
function countingBackwards(){
  let meuRetorno = [];
  let number = 20;
      while (number >= 1 ){  
          
          meuRetorno.push(number);
          number --;
  }
 
  return meuRetorno;
}
console.log(countingBackwards());

//exercicio 7
function evenNumbersBackwards(){
  let meuRetorno = [];
  let number = 20;
      while (number >= 1 ){
          if(number % 2 === 0){
          
            meuRetorno.push(number);
      }  
          
          
          number --;
  }
  return meuRetorno;
}
console.log(evenNumbersBackwards());
//exercicio 8
function oddNumbersBackwards(){
  let meuRetorno = [];
  let number = 20;
      while (number >= 1){
          if(number % 2 !== 0){
            meuRetorno.push(number);
          
      }  
          
          
          number --;
  }
  return meuRetorno;
}
console.log(oddNumbersBackwards());
//exercicio 9
function multiplesOfFiveBackwards(){
  let meuRetorno = [];
  let number = 100;
      while (number >= 1 ){  
            if(number % 5 === 0){
            meuRetorno.push(number);
          }
      
      number --;
  }
  return meuRetorno;
}
console.log(multiplesOfFiveBackwards());
 //exercicio 10
function squareNumbersBackwards(){
  let meuRetorno = [];
  let number = 100;
      while (number >= 1 ){ 
        if(  number * number <= 100 ){
          meuRetorno.push(number * number);
        
  }
  number --; 
}
return meuRetorno;
}
console.log(squareNumbersBackwards());